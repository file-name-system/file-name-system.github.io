---
title: FNS yaml 초안
description: yaml 파일로 FNS를 기술합니다.
---

# File Name System Spec - Draft

## 개요
File Name System Spec 은 폴더 및 파일에 부여된 명명 규칙을 정의합니다.  
각 파일과 폴더의 이름이 가져야할 일관된 구조와 구성을 기술합니다. 
이를 통해 참여한 사람들이 정제된 데이터를 생산할 수 있도록 지원하며, 
사람들과 SW들이 지식체계를 오해없이 전달하도록 돕습니다.
이 스펙은 YAML 형식의 파일로 저장됩니다. 

## 스펙

구분자 "---" 를 사용하여 최소한 3가지 part를 생략하지 않고, 순서를 지켜서 포함하고 있어야합니다.
코멘트는 "#"로 시작합니다. 

```yaml
### part1: 폴더의 트리구조와 이름이 가져야 하는 패턴들   
- 폴더이름: # ":"로 끝나면 폴더임을 나타냄.  
  - 하위폴더이름:   #앞쪽의 공백으로 tree구조를 표현함 
  - <pattern1>-<color>  #< 와 >를 사용하여 패턴을 표현함 
--- 
### part2: part1에서 정의된 패턴에 올 수 있는 실제 예.
color:["black","red","white"]  # 배열로 저장. 
--- 
### part3: part1에서 정의된 패턴중 정규식으로 표현할 수 있는 것들. 대문자는 스팩에서 사용할 예정입니다.  
pattern1:'.+'  
--- 
### 확장1 
---
### 확장..n    
```

## 실제예 
```yaml
- 보고서:
    - <YYYY>: # 년도 2020 2021 2022 ...
        - <MM>: # 월 01 02 03 ...
            - <YYYYMMDD>-<title>.xlsx # 20200101-마케팅보고서.xlsx
- <INDEX01>-<routine_work>: # 02-고객관리 03-모니터링 ...
- projects:
    - <project>: #프로젝트명
        - <task>:
            - <title>-<task>-<project>-<YYYYMMDD>-<VER>.<EXT> # 달착륙프로젝트제안-기획-달착륙-20200101-v1.0.ppt
---
task: ["조사", "기획", "개발", "출시", "마케팅"]
project: ["MoonLanding", "MoonShot", "MoonWalking"]
EXT: ["pdf", "xlsx", "ppt"]
---
YYYYMMDD: '(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])' #년월일
YYYY: '(?:19|20)\d{2}' #년도 2019 2020 2021 ...
MM: "0[1-9]|1[0-2]" # 달  01 02 .. 12
INDEX01: "0[1-9]|[1-9][0-9]" # 번호 01 02 03 ...
INDEX001: "0[0-9]{2}|[1-9][0-9]{2}" # 번호 001 002 003 ...
VER: '[Vv][0-9]{1,2}\.[0-9]{1,2}' # 버전 V1.0 v2.3
EXT: "[a-zA-Z0-9]{1,5}" # 확장자 pdf xlsx ppt ...
```


## 상세스팩 

1. [yaml 스팩](https://yaml.org/spec/)을 따라야 합니다.  
1. ---로 구분하여 최소한 3개의 Document를 포함해야 합니다.
1. 첫번째 document의 최상위 항목은 Block Sequence이어야 합니다.   
1. 첫번째 document내의 Block Sequence는 Mapping (하위 폴더를 의미) 또는 문자열 Scalar (파일을 의미)를 가질 수 있습니다.
1. 첫번째 document내의 Mapping은 반드시 단 하나의 key 를 가져야 하며, 이 키값에 하위폴더의 이름이 저장됩니다.
1. 첫번째 document내의 Mapping의 value 값은 반드시 Block Sequence (하위폴더에 목록이 있는 경우) 또는 빈값(빈폴더인 경우)이어야 합니다.

## 왜 사용할까요?

## FAQ
    