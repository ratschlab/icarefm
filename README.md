![ICU Foundation Model Logo](resources/logo/repo_title_banner_icarefm.png)

# ICareFM

> A Foundation Model for Intensive Care Unlocking Generalization across Tasks and Domains at Scale

This is the root repository for ICareFM. We provide an overview of the associated resources.

## News

- August 20. 2025: Preview version of [A Foundation Model for Intensive Care: Unlocking Generalization across Tasks and Domains at Scale](https://www.medrxiv.org/content/10.1101/2025.07.25.25331635v1) posted on medRxiv
- December 14. 2024: Best Paper Award at [AIM-FM @ NeurIPS](https://aim-fm-24.github.io/NeurIPS/) for [Towards Foundation Models for Critical Care Time Series](https://arxiv.org/abs/2411.16346)

## Data

We are working hard to create an easy to access and one-click-download version of our large-scale multi-center harmonized dataset available on the
[Physionet](https://physionet.org/) platform. Watch this space for news on this development and effort.

For data harmonization we use the `ricu` tool written in the R programming language:
- Our extended fork of the `ricu` data harmonization tool: `{tbd}`
- Original data harmonization tool `ricu` source repository: https://github.com/eth-mds/ricu

## Model

## Experiments and Results

## Publications

- Preview manuscript of our foundation model and dataset release: [A Foundation Model for Intensive Care: Unlocking Generalization across Tasks and Domains at Scale](https://www.medrxiv.org/content/10.1101/2025.07.25.25331635v1)
- Early Workshop Paper highlighting data harmonization efforts and large benchmarking: [Towards Foundation Models for Critical Care Time Series](https://arxiv.org/abs/2411.16346)

### Citations

The medRxiv preview of [A Foundation Model for Intensive Care: Unlocking Generalization across Tasks and Domains at Scale](https://www.medrxiv.org/content/10.1101/2025.07.25.25331635v1):
```
@article {Burger2025.07.25.25331635,
	author = {Burger, Manuel and Chopard, Daphn{\'e} and Londschien, Malte and Sergeev, Fedor and Y{\`e}che, Hugo and Kuznetsova, Rita and Faltys, Martin and Gerdes, Eike and Leshetkina, Polina and B{\"u}hlmann, Peter and R{\"a}tsch, Gunnar},
	title = {A Foundation Model for Intensive Care: Unlocking Generalization across Tasks and Domains at Scale},
	elocation-id = {2025.07.25.25331635},
	year = {2025},
	doi = {10.1101/2025.07.25.25331635},
	publisher = {Cold Spring Harbor Laboratory Press},
	URL = {https://www.medrxiv.org/content/early/2025/07/25/2025.07.25.25331635},
	eprint = {https://www.medrxiv.org/content/early/2025/07/25/2025.07.25.25331635.full.pdf},
	journal = {medRxiv}
}
```

Workshop Paper highlighting early progress on creating a large-scale harmonized critical care dataset [Towards Foundation Models for Critical Care Time Series](https://arxiv.org/abs/2411.16346):
```
@misc{burger2024foundationmodelscriticalcare,
      title={Towards Foundation Models for Critical Care Time Series}, 
      author={Manuel Burger and Fedor Sergeev and Malte Londschien and Daphné Chopard and Hugo Yèche and Eike Gerdes and Polina Leshetkina and Alexander Morgenroth and Zeynep Babür and Jasmina Bogojeska and Martin Faltys and Rita Kuznetsova and Gunnar Rätsch},
      year={2024},
      eprint={2411.16346},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2411.16346}, 
}
```

#### Please also cite:

If you use our work on data harmonization please consider citing the original authors work on the `ricu` package:
```
@article{bennett2023ricu,
  title={ricu: R’s interface to intensive care data},
  author={Bennett, Nicolas and Ple{\v{c}}ko, Drago and Ukor, Ida-Fong and Meinshausen, Nicolai and B{\"u}hlmann, Peter},
  journal={GigaScience},
  volume={12},
  pages={giad041},
  year={2023},
  publisher={Oxford University Press}
}
```

