**Initialized Next.js**
```
npx create-next-app --typescript blog
```

**Changed image optimization setting**

**Added Github Action**

**Install Mantine**
```
yarn add @mantine/core @mantine/hooks @mantine/next @emotion/server @emotion/react
```

**Replace UI Framework with Chakra-UI**
- Mantine의 Grid 컴포넌트가 불필요하게 -8 마진을 부여하지만 고쳐지지 않음
- Chakra-UI가 더 고급스러움
```
yarn remove @mantine/core @mantine/hooks @mantine/next
```
```
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Notes
- useMediaQuery Hook으로 했을 시, flash 현상이 발생하여 chakra의 breakpoint 이용하는거로 변경
- next-themes는 default로 root와 background 설정 바꾸는 듯 하다

### 블로그 레이아웃 디자인
- 좌측에 타이틀
- 우측에 메뉴 및 다크모드
- 모바일 시 좌측에 버거

결정 이유: 블로그 타이틀을 더 강조하기 위함

좋은 자료:
https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-ios/