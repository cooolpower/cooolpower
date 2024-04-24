"use client";
import { useState } from "react";
import * as styles from "./filter.css";

export default function Filter() {
  let filterBoxItemList = [
    { id: 1, name: "전체", code: 10026, status: false },
    { id: 2, name: "기획·전략", code: 10027, status: false },
    { id: 3, name: "법무·사무·총무", code: 10028, status: false },
    { id: 4, name: "인사·HR", code: 10029, status: false },
    { id: 5, name: "회계·세무", code: 10030, status: false },
    { id: 6, name: "마케팅·광고·MD", code: 10031, status: false },
    { id: 7, name: "개발·데이터", code: 10032, status: false },
    { id: 8, name: "디자인", code: 10033, status: false },
    { id: 9, name: "물류·무역", code: 10034, status: false },
    { id: 10, name: "운전·운송·배송", code: 10035, status: false },
    { id: 11, name: "영업", code: 10036, status: false },
    { id: 12, name: "고객상담·TM", code: 10037, status: false },
    { id: 13, name: "금융·보험", code: 10038, status: false },
    { id: 14, name: "식·음료", code: 10039, status: false },
    { id: 15, name: "고객서비스·리테일", code: 10040, status: false },
    { id: 16, name: "엔지니어링·설계", code: 10041, status: false },
    { id: 17, name: "제조·생산", code: 10042, status: false },
    { id: 18, name: "교육", code: 10043, status: false },
    { id: 19, name: "건축·시설", code: 10044, status: false },
    { id: 20, name: "의료·바이오", code: 10045, status: false },
    { id: 21, name: "미디어·문화·스포츠", code: 10046, status: false },
    { id: 22, name: "공공·복지", code: 10047, status: false },
  ];
  const [isToggle, setIsToggle] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [selectedItemNum, setSelectedItemNum] = useState(0);
  const [filterItem, setFilterItem] = useState(new Array(...filterBoxItemList));
  const [buttonStates, setButtonStates] = useState(new Array(filterBoxItemList.length).fill(false));

  const newButtonStates = [...buttonStates];
  const newFilterItem = [...filterItem];
  

  const toggleButton = (index: number) => {
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
    filterItem[index].status = newButtonStates[index] == true ? true : false;
  };

  const resetFilter = () => {
    newButtonStates.fill(false);
    setButtonStates(newButtonStates);
    setSelectedItemNum(0);
    setIsToggle(!isToggle);
  }
  
  const onSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const selectedIndex = newFilterItem.filter(obj => obj.status === true);
    
    setSelectedItemNum(selectedIndex.length);
    setFilterItem(newFilterItem);
    setSelectedName(newFilterItem.find(obj => obj.status === true)?.name as string);
    setIsToggle(!isToggle);

    console.log(selectedName);
  }

  const jobToggle = () => {
    setIsToggle(!isToggle);
  };
  
  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>직무전체</h2>
        <button
          className={selectedItemNum > 0 ? `${styles.selectJobOpen}` : `${styles.selectJob}`}
          onClick={jobToggle}
        >
          {selectedItemNum > 0 ? `${selectedItemNum > 1 ? selectedName +' 외 ' + (selectedItemNum - 1) : selectedName}` : '직무를 선택해주세요'}
        </button>
        <div
          className={
            isToggle
              ? `${styles.filterBoxOpen} ${styles.jobBox}`
              : `${styles.filterBox} ${styles.jobBox}`
          }
        >
          <h3 className={`${styles.title} ${styles.blind}`}>직무</h3>
          <ul className={styles.filterBoxUl}>
            {buttonStates.map((isActivated, index) => {
              return (
                <li className={styles.filterBoxLi} key={index}>
                  <button
                    className={
                      isActivated
                        ? `${styles.filterBoxButtonActive}`
                        : `${styles.filterBoxButton}`
                    }
                    data-code={filterBoxItemList[index].code}
                    onClick={() => toggleButton(index)}
                  >
                    {filterBoxItemList[index].name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.buttonBox}>
            <button className={styles.resetFilter} onClick={resetFilter}>초기화</button>
            <button className={`${styles.submitFilter}`} type="submit" onClick={onSubmit}>적용하기</button>
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.optionsWrap}>
          <div className={styles.optionsButtonWrap}>
            <button className={styles.optionsButton}>지역</button>
          </div>
          <div className={styles.optionsButtonWrap}>
            <button className={styles.optionsButton}>경력</button>
          </div>
          <div className={styles.optionsButtonWrap}>
            <button className={styles.optionsButton}>학력</button>
          </div>
        </div>
        <div className={styles.searchWrap}>
          <div className={styles.searchInputWrap}>
            <input type="search" className={styles.searchInput} placeholder="기업, 공고명 검색" />
            <button type="button" className={styles.searchButton}></button>
          </div>
        </div>
      </div>
    </div>
  );
}
