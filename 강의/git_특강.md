# git 사용법

## Project Pre-TODO list

1. 프로젝트 폴더(디렉토리)를 만든다.
2. `.gitignore`와 `README.md` 파일을 생성한다.
   1. `.gitignore` 파일은, git의 파일 관리에서 무시할 내용을,
   2. `README.md`는 프로젝트의 소개 및 정리 내용을 담는다.
3. `$ git init`을 한다!
4. **주의**
   1. `.git`폴더와,`.gitignore`파일과 `README.md`파일이 같은 위치에 존재하는가
5. 첫번째 커밋을 한다



## git 시작

`touch README.md .gitignore` 시작 파일 2개 만들기



## git 사용이유

데이터 관리 및 협업 프로젝트를 위하여

## 명령어 

### git (master 환경) 

앞에 git을 붙이고 사용

- `init` (깃으로 지정)
- `status` (상태 확인)
- `add` (스테이지에 올리기)

  - `add .` (수정된 파일 전체 올리기)
- `commit -m 'file 이름'` (상태 촬영)
- `log` (촬영한 기록)
- `restore` (되돌리기)
- `checkout (로그몇자)` (로그상태로 되돌리기)사용 주의 :skull_and_crossbones: 이 상태에서 작업시 복구불가 오류 발생 가능성 :arrow_up: 
- `checkout master` (원상태로 복구)
- `git diff 'file 이름'` (변경내용 확인)
- `git commit --amend  commit` 이름 변경
- `git branch`      실험 창 목록 확인
- `git branch " " `  실험 창 생성
- `git switch " "`     실험창으로 헤드 이동
  - `-c`  생성후 이동
  - `git switch -c feature/login` /가 중요
- `git log --pretty=oneline`  로그 정리
- `git log --oneline` 로그 줄정리
- `git merge " " ` 완료된 실험을 master로 변경 or 합치기
- `git branch -d " "`  실험 종료된 브랜치 삭제
- `git log --oneline --decorate --graph`
- `git remote add 이름	URL`  -> 깃허브에 연결
- `git remote remove 이름` -> 삭제
- `git push 이름 master`  -> 업로드
- `git pull origin master`  -> 다운로드
- `git remote -v`  -> 정보 확인

### terminal 환경

- `rm 'file이름' ` (삭제)
  - `rm -r 'file 이름'` (파일 삭제)
    - `rm -rf` 강제 실행
- `cd` (이동)
- `ls` (파일 목록)
  - `ls -a` (숨겨진 파일까지)
- `touch` (생성)
- `mkdir` (폴더 생성)
- `start` (실행)
- `control + c` 취소
- `vim` "파일이름" 터미널에서 파일 수정 사용

















검색해보기

`mv` -> 무브



참고 사이트

https://backlog.com/git-tutorial/kr/ git 공부용

https://www.toptal.com/developers/gitignore .gitignore용

today i learned 캠페인



협업 

git clone "주소"  -> 복사

branch 생성후 작업

git push origin feature/login  -> 자신의 branch가 업로드됨

master 로 이동

github에서 master을 업데이트

끝난 branch 삭제

branch 생성후 작업

git push origin feature/login  -> 자신의 branch가 업로드됨

master 로 이동

github에서 master을 업데이트

끝난 branch 삭제



충동시 resolving conflits 에서 수정후 merging



