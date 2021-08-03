# conda 가상환경

```powershell
conda deactivate

conda create --name django python=3.8.3

conda env list

conda activate django

pip install ipykernel

python -m ipykernel install --user --name django --display-name "Python Django"

conda install -c conda-forge jupyterlab
```

`conda remove --name tensorflow35 --all` 가상환경 삭제

```powershell
-------Facebook Prophet-----

#1.virtual env

conda create --name prophet python=3.8.3

conda activate prophet

pip install ipykernal

python -m ipykernel install --user --name prophet --display-name "python prophet"

conda install -c conda-forge fbprophet

conda install -c conda-forge jupyterlab

```

conda 삭제

https://nomad-programmer.tistory.com/17



파이썬 지도 그릴때 참고

https://www.kaggle.com/junghok/covid-19-the-story-of-the-vaccines/edit



시계열 예측에서는 노이즈 제거후 분석 가능

시계열 분석

강의파일 -> KOSA -> uncertain -> TS1, 3-holiday
