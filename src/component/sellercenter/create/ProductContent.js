import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//https://github.com/zenoamaro/react-quill
export default function ProductContent() {
    const [value, setValue] = useState('');
    const moduless = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }
    return (
        <>
            {/* 글쓰기 에디터 */}
            <div className="container">
                <div className="row">
                    <div className="col-12 card">
                        <div className="card-body">
                            <ReactQuill value={value} onChange={setValue} modules={moduless}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

