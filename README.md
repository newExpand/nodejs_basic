# 마주친 문제점 현황
### 22.12.24
전날로 회원가입시 따로만든 json파일에 데이터가 추가되는 방식을 성공하였고, 그 다음 json파일이 아닌 실제 db와 연동을 해보기 위해 aws와 mysql을 연동을 계획 하였음. 
하지만 환경세팅 후 테스트로 터미널에서 서버를 연동하려는 중 다음과 같은 에러를 만남 <br>
![image](https://user-images.githubusercontent.com/120312998/209441436-8da09a9a-15e6-4482-89e2-4de2928ac10a.png)
일단 구글링 결과 설정 중 보안그룹 설정을 빼먹은걸 알게 되었고 aws에 DB 인스턴스의 보안그룹에 들어가 인바운드 규칙 편집을 통해 몇가지 추가하는 해결책들이 보이고 있으나
현재 적용이 안되어 