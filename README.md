# 마주친 문제점 현황
### 22.12.24
전날로 회원가입시 따로만든 json파일에 데이터가 추가되는 방식을 성공하였고, 그 다음 json파일이 아닌 실제 db와 연동을 해보기 위해 aws와 mysql을 연동을 계획 하였음. 
하지만 환경세팅 후 테스트로 터미널에서 서버를 연동하려는 중 다음과 같은 에러를 만남 <br>
![image](https://user-images.githubusercontent.com/120312998/209441436-8da09a9a-15e6-4482-89e2-4de2928ac10a.png) <br>
일단 구글링 결과 설정 중 보안그룹 설정을 빼먹은걸 알게 되었고 aws에 DB 인스턴스의 보안그룹에 들어가 인바운드 규칙 편집을 통해 몇가지 추가하는 해결책들이 보이고 있으나
현재 적용이 안되어 해결책을 계속 찾아가는 중

### 22.12.25
어제의 문제점을 찾던 중, 인바운드 규칙을 추가하는 것과 별개로 현재 설치되있던 mysql의 경로가 잘 맞지 않아 생기는 문제도 같이 있었음. 경로를 
mysql을 설치한 내 경로(**나같은 경우 c/Program Files/MYSQL/MySQL Server 8.0/bin**)로 직접 경로를 설치하고,<br>
./mysql -h {내 aws 엔드포인트 경로} -u {데이터베이스 id} -p 로 명령어를 주어 연결에 성공함
(-p까지만 추가하고 enter를 누를 시 'Enter password:'문장이 뜨며 지정한 비밀번호 넣으면 됨)<br>
연결에 성공한 후, show databases 명령어를 통해 연결된 데이터베이스 확인 결과 제대로 연결됨
