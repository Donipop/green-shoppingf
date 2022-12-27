import axios from 'axios';
import React, { useEffect,useState,useRef} from 'react';
import { FaStar } from 'react-icons/fa';
import Pagination from './Pagination';
import Modal from './Modal';
import ReviewUpdate from './ReviewUpdate';
    const ReviewList = (props) => {
    const [List, setList] = useState([]);
    const array = [0,1,2,3,4];
    const [score, setscore] = useState([false, false, false, false, false ]);
    const [id, setid] = useState(0);
    const [limit, setLimit] = useState(10);
    const [paging, setPaging] = useState(1);
    const offset = (paging - 1) * limit;
    const refref = useRef();
    const [checked, setChecked] = useState({
        Select: Array(List.length).fill(false)
    });

     const openModal = (e,index) => {
        const newArr = Array(List.length).fill(false)
        newArr[index] = true
         setChecked({
            Select: newArr
         })
        }
     const closeModal = () => {
          setChecked({Select:false})
     };

    
    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/view/review/${props.page}`,
        })
        .then((res) => {
            setList(res.data);
        }
        ).catch((err) => {
            console.log('후기 보내기 에러', err)
    })
    
     }, [props.page])

     useEffect(() => {
        const starScore = (index) => {
            const star = [...score];
            for(var i =0; i< 5; i++){
                star[i] = i <= index ? true : false;
            }
            setscore(star);
        }
        for(var i=0; i<List.length; i++){
            if(List[i].product_num === props.props){
                starScore(List[i].star);
            }
        }
     }, [List,props.props, score])

     const StarList = (props) => {
        return (
         <div>
        {array.map ((item) => (
            <FaStar key = {item} size = {15} color = {props > item ? '#fcc419' : 'gray'} />
         ))}
         </div>
        )
        }
    
        const truecheck = (e) => {
            console.log(refref.current.href)
            setid(e.target.id);
            if(id === e.target.id){
              //  document.getElementById("ad" + e.target.id).href=`#collapseExample${id}`;
              refref.current.href=`#collapseExample${id}`;
                
        }
    }
    
    const Delete = (e) => {
        axios({
            method: 'post',
            url: `/api/view/review/delete/${e.target.id}/${props.page}`,
            data : { id: e.target.id,
                      product_num: props.page }
        })
            .then(() => {
            if(window.confirm("정말 삭제하시겠습니까?")) {
                alert("삭제되었습니다.");
                window.location.reload();
              } else {
                alert("취소합니다.");
              }
        })
            
    }

    return (
        <div>
            <select type="number" value={limit} onChange={({target: {value} }) => setLimit(Number(value))}>
                        <option value="10">10개</option>
                        <option value="12">12개</option>
                        <option value="20">20개</option>
                        <option value="50">50개</option>
                        <option value="100">100개</option>
            </select> 
        {List.slice(offset, offset+limit).map ((item, index) => {
            return (
                <div key = {item.id} className="review_wrap" style={{borderBottom:"1px solid #ccc"}}>
                    <div className="review_wrap_title">
                        <div>
                             <strong className="Strong">{item.user_id}</strong>
                        </div>
                        <div style={{display:"flex"}}>
                                {StarList(item.star)}
                                <div style={{fontSize:"12px", paddingTop:"3px"}}>{item.regdate}</div>
                                <a href="#!"role="button"  onClick={e => openModal(e,index)} style={{paddingLeft:"4px",fontSize:"14px"}}>수정</a>
                                 <Modal close={closeModal} header="상품평 수정하기" check={checked.Select[index]}>
                                <ReviewUpdate id={item.id} page={item.product_num}/>
                                 </Modal>
                                <a href="#!"role="button" id={item.id} onClick={Delete} style={{fontSize:"14px",paddingLeft:"4px"}}> 삭제</a>
                        </div>
                        <div>
                                <strong style={{paddingRight:"10px"}}>한줄평</strong>
                                <span className="review_wrap_title_date">{item.title}</span>
                        </div>
                  
                        <div className="review_wrap_cont" >
                             <p>
                                <a ref={refref} href="{() => false}" className="btn btn-light" id={item.id} onClick={truecheck} data-bs-toggle="collapse"  role="button" aria-expanded="false"aria-controls="collapseExample">
                                   상세후기
                                </a>
                             </p>
                            <div className="collapse" id={`collapseExample${item.id}` }>
                                 <div className="card card-body" >
                                    <div >{item.cont}</div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

            )
        })

        }
        <Pagination 
        total={List.length}
        limit={limit}
        page={paging}
        setPage={setPaging}
      />

         
        
        </div>
    );
}

export default ReviewList;