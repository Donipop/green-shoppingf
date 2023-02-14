import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
export default function ProductName({ getData, UpdateData }) {
  const [text, setText] = useState("");
  const onChangeText = (e) => {
    if (e.target.value.length > 255) {
      alert("100자 이내로 입력해주세요.");
      e.target.value = e.target.value.slice(0, 254);
      setText(e.target.value);
      return;
    } else {
      setText(e.target.value);
    }
  };
  const titleInput = useRef();
  useEffect(() => {
    getData("title", text);
  }, [text]);

  useEffect(() => {
    if (UpdateData === undefined || UpdateData?.length === 0) return;
    setText(UpdateData.title);
    titleInput.current.value = UpdateData.title;
  }, [UpdateData]);

  return (
    <>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="상품페이지 제목을 입력해주세요"
          onChange={onChangeText}
          ref={titleInput}
        />
        <span className="input-group-text">{text.length}/255</span>
      </div>

      <div className="pt-3">
        <Small>
          판매 상품과 직접 관련이 없는 다른 상품명. 스팸성 키워드 입력 시
          관리자에 의해 판매 금지될 수 있습니다.
        </Small>
        <br />
        <Small>
          유명 상품 유사문구를 무단으로 도용하여 ~스타일, ~st 등과 같이 기재하는
          경우 별도 고지 없이 제재될 수 있습니다.
        </Small>
      </div>
    </>
  );
}

const Small = styled.small`
  color: green;
  font-size: 0.8rem;
`;
