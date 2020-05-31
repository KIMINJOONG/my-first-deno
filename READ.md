## deno 공부

-   deno는 모든것을 promise로 리턴한다.
-   top level에서 async await을 지원하기때문에 명시해주지 않아도 된다.
-   deno는 node와 다르게 모든 접근권한을 다 지정해주어야한다. 파일쓰기 읽기 등 모든걸 다 정할수있음 권한 종류는 공식홈페이지에도 나와있듯이 아래와같다.

```
--allow-read
--allow-write
--allow-net
--allow-env
--allow-run
--allow-all
```

### 기억할것!

-   항상 Top level에서만 async에 감싸지지 않아도 await을 사용할수있지만, 그외에는 무조건 async로 감싸야한다!
