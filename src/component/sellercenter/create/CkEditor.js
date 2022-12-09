import React, {useEffect} from "react";


class CkEditor extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.ckeditor.com/ckeditor5/35.3.2/classic/ckeditor.js";
        script.async = true;
        document.head.appendChild(script);

    

    }
    render() {
        return (
            <>
                <div className="form-group">
                <label htmlFor="product-content">상품 상세 설명</label>
                <textarea className="form-control" id="product-content" rows="3"></textarea>
                </div>

            </>
        );
    }
}

export default CkEditor;


