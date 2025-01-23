# 🏅 올림픽 메달 트래커 🏅

사용자가 직접 국가와 매달 개수를 추가하고 관리할 수 있는 웹사이트입니다. <br/><br/>
[사이트 바로가기](https://olympic-medal-tracker-rho.vercel.app/)

<br/>

## ⚒️ 주요 기능 ⚒️

- 국가 추가 기능: 원하는 국가와 메달 개수를 작성하고 추가할 수 있습니다.
- 메달 업데이트 기능: 수정을 원하는 국가 이름과 메달 개수를 작성한 후 업데이트를 누르면 수정이 가능합니다.
- 삭제 기능: 삭제 버튼을 누르면 삭제가 가능합니다.
- 메달 정렬: 금메달순을 선택하면 금메달이 많은 순으로, 총합순을 선택하면 메달 개수의 합이 높은 순으로 정렬이 됩니다.
- 로컬 스토리지 활용: 새로고침이나 페이지를 나가더라도 메달 리스트가 저장됩니다.

<br/>

## 📁 프로젝트 구조 📁

```
src/
├── components/            # 컴포넌트
│   ├── MedalForm/         # 메달 추가 폼 관련 컴포넌트
│   │   ├── FormInput.jsx      # 입력 컴포넌트
│   │   ├── FormSubmitBtn.jsx  # 제출 버튼 컴포넌트
│   │   └── MedalForm.jsx      # 메달 리스트 추가 폼 레이아웃
│   │
│   ├── MedalList/         # 메달 리스트 관련 컴포넌트
│   │   ├── AddMedalList.jsx   # 새로운 메달 리스트 추가 기능 컴포넌트
│   │   ├── MedalList.jsx      # 메달 리스트 컴포넌트
│   │   └── SortBtn.jsx        # 정렬 버튼 컴포넌트
│   │
│   └── MedalTable.jsx     # 폼, 메달 리스트 레이아웃
│
├── App.jsx                # 루트 컴포넌트
├── index.css              # 스타일 관리
├── main.jsx               # 진입점
```
<br/>

## ⚙️ 컴포넌트별 역할 ⚙️

- MedalTable.jsx : 메달 집계를 관리하는 부모 컴포넌트 <br/>

**MedalForm**
- MedalForm.jsx : Form UI를 만드는 컴포넌트
- FormInput.jsx : Form의 input 컴포넌트
- FormSubmitBtn.jsx : Form 제출 버튼 컴포넌트

**MedalList**
- MedalList.jsx : 메달 리스트 UI 컴포넌트
- AddMedalList.jsx : 메달 리스트를 정렬한 후 화면에 출력하는 컴포넌트
- SortBtn.jsx : 메달 정렬을 위한 radio 버튼 컴포넌트

