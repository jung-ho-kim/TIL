seaborn을 사용할때 `regplot`이 중요(상관성을 볼 수 있어서)



seborn1,4

plot1, 3-matplot

tips_pandas



음식값이 늘어날 수 록 팁은 늘어나지만 음식 대비 퍼센트는 낮아진다 

금액만 따지자면 size가 큰 팀일 수 록 커지지만 주로 방문하는 사람이 2인이 가장 많아서 2인 테이블을 3,4인의 대략 4배정도로 하고

비교적 한가한 금요일에 바쁜 주말을 대비해놓아야 한다.

```python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

tips = pd.read_csv('.\\tips.csv')

tips.head()

tips.groupby([tips['day'],tips['time']]).count()

t_bill = tips.total_bill

t_bill.describe()

sns.displot(x=t_bill, bins=50)

pd.crosstab(index=tips['size'], columns='count')
pd.crosstab(index=tips['size'], columns='count').hist()
pd.crosstab(index=tips['size'], columns='count').plot()

size = pd.crosstab(index=tips['size'],columns='count')

size.plot.bar()

tips['tip_rate']=(tips["tip"] / tips["total_bill"])
#파생변수 만들기

tips.describe()

df['sex'].replace({'Female':0, 'Male' :1}, inplace=True)
df['smoker'].replace({'No':0, 'Yes' :1}, inplace=True)
df['day'].replace({"Thur" : 0, "Fri" : 1, "Sat" : 2, "Sun" : 3}, inplace=True)
df['time'].replace({'Lunch':0, 'Dinner' :1}, inplace=True)

tips["sex"] = tips["sex"].replace({"Female" : 0, "Male" : 1})
tips["smoker"] = tips["smoker"].replace({"No" : 0, "Yes" : 1})
tips["day"] = tips["day"].replace({"Thur" : 0, "Fri" : 1, "Sat" : 2, "Sun" : 3})
tips["time"] = tips["time"].replace({"Lunch" : 0, "Dinner" : 1})
#엔코딩 방법

tips.describe()

tips.corr()

import pandas_profiling

tips.profile_report()
```



- 목표변수

1. 매출
2. 팁	
3. 요일별 팀 Size 수
4. Tip rate
5. 요일별 방문 예상 팀 수



액티브한것 패시브한것 비교 및 제시

무엇을 예측할지, 결과를 가지고 무엇을 할 것인지.

