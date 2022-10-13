# Yup Score

On-chain reputation is extremely valuable, but hard to measure. Currently, protocols, DAOs, and individuals have no universal signal to understand a user's social value. This leads to bot activity, high-friction onboarding, and lack of clarity for individuals about their impact. We need an easy to use, universal standard of uniqueness for addresses that provides sybil resistance and an accurate measurement of social value.

The Yup Score provides a reputation metric for every EVM/Ethereum address by aggregating their on-chain actions and ranking them between 1-100. The weight of each action is determined by its social value.

More information coming soon.

### Description

Each adapter calculates a score based on an accounts onchain activity. Adapter scores are weighted and summed to generate the final Yup score.

| Adapter                   | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| ENS                       | retrieves ENS domains held                                         |
| Ethereum Balance          | retrieves Ethereum balance                                         |
| Polygon Balance           | retrieves Polygon balance                                          |
| Ethereum NFTs             | retrieves Ethereum NFTs held                                       |
| Gnosis NFTs               | retrieves Gnosis (xDai) NFTs held                                  |
| Polygon NFTs              | retrieves Polygon NFTs held                                        |
| Ethereum Activity         | retrieves Ethereum tx count and account age                        |
| Recent Polygon Transfers  | retrieves recent transfers on Polygon and finds related addresses  |
| Recent Ethereum Transfers | retrieves recent transfers on Ethereum and finds related addresses |
| Ethereum ERC20 Tokens     | retrieves ERC20 tokens held                                        |
| Snapshot                  | retrieves snapshot vote count                                      |
| Proof of Humanity (PoH)   | retrieves PoH status                                               |

{% content-ref url="score-api.md" %}
[score-api.md](score-api.md)
{% endcontent-ref %}
