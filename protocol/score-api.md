# Score API

{% hint style="success" %}
**Base URL:** [**`http://api.yup.io`**](http://api.yup.io)
{% endhint %}

{% tabs %}
{% tab title="Request" %}
| Method | Endpoint                              | Description                                                                                                                                      |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET`  | `/score?address={ENS or ETH address}` | <p>Returns a reputation score from 0-100 for an EVM address or ENS name<br><strong>Query params:</strong> {address} - any EVM address or ENS</p> |
| `GET`  | `/score/weights`                      | Returns a json object with the current weights, names, and values                                                                                |

&#x20;

**Rate limits:** _50_ requests per minute, per IP

**Scores TTL:** currently scores are refreshed after **1 day**
{% endtab %}

{% tab title="Score Response Example" %}
```javascript
{
   "data":{
      "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "score":86,
      "expiration":"2022-06-02T03:14:55.836652Z",
      "last_updated":"2022-06-01T03:14:55.836652Z",
      "score_data":{
         "score":86.37999570482314,
         "ens":{
            "score":53.8,
            "primary":"vitalik.eth",
            "domains":[
               {
                  "name":"vbuterin.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               ...
            ],
            "count":19
         },
         "eth_balance": {
            "score": 100,
            "balance": 4092.474632847039,
            "chain_id": "1"
         },
         "eth_nfts":{
            "score":100,
            "foundation":0,
            "bayc":0,
            "superrare":0,
            "ens":3
         },
         "gnosis_nfts":{
            "score":25,
            "poap":47,
            "kudos":0
         },
         "polygon_nfts":{
            "score":100,
            "ud":0,
            "git":0
         },
         "polygon_balance":{
            "score":78.51598768715968,
            "balance":39.25799384357984,
            "chain_id":"137"
         },
         "eth_activity":{
            "score":100,
            "activity":692.3058773187234
         },
         "eth_age":{
            "score":100,
            "age":638.1378441765851
         },
         "eth_txn_count":{
            "score":90.5,
            "count":805
         },
         "recent_polygon_transfers":{
            "score":0,
            "start_period":27779705,
            "end_period":29017311,
            "related_addresses":[],
            "chain":"137"
         },
         "recent_eth_transfers":{
            "score":100,
            "start_period":14689484,
            "end_period":14882507,
            "related_addresses":[
               "vitalik.eth",
               "dingaling.eth",
               "ʕ◕ᴥ◕ʔ.eth",
               "0x5ea9681c3ab9b5739810f8b91ae65ec47de62119",
               "tim.eth"
            ],
            "chain":"1"
         },
         "eth_erc20_tokens":{
            "score":100,
            "tokens_held":11
         },
         "snapshot_votes":{
            "score":0,
            "votes":null,
            "count":0
         },
         "poh":{
            "registered":false
         },
         "partial":false
      },
      "score_weights":{
         "ens":0.14,
         "eth_balance":0.15,
         "polygon_balance":0.15,
         "polygon_nfts":0.16,
         "gnosis_nfts":0.064,
         "eth_nfts":0.096,
         "eth_activity":0.08,
         "recent_polygon_transfers":0.04,
         "recent_eth_transfers":0.04,
         "snapshot_votes":0.04,
         "eth_erc20_tokens":0.04
      }
   }
}
```
{% endtab %}

{% tab title="Adapters Structure" %}
```
 Score               *float64               `json:"score"`
 Ens                 *EnsResult             `json:"ens"`
 EthBalance          *NativeBalanceResult   `json:"eth_balance"`
 EthNfts             *NFTEthResult          `json:"eth_nfts"`
 GnosisNFts          *NFTGnosisResult       `json:"gnosis_nfts"`
 PolygonNfts         *NFTPolyResult         `json:"polygon_nfts"`
 PolygonBalance      *NativeBalanceResult   `json:"polygon_balance"`
 EthActivity         *EthActivityResult     `json:"eth_activity"`
 RecentPolyTransfers *RecentTransfersResult `json:"recent_polygon_transfers"`
 RecentEthTransfers  *RecentTransfersResult `json:"recent_eth_transfers"`
 EthERC20Tokens      *ETHERC20Result        `json:"eth_erc20_tokens"`
 Snapshot            *SnapshotResult        `json:"snapshot_votes"`
 PoH                 *PoHResult             `json:"poh"`
 Partial             bool                   `json:"partial"`
```
{% endtab %}
{% endtabs %}

## Adapters

### Description

Each adapter calculates a score based on an accounts onchain activity. Adapter scores are weighted and summed to generate the final Yup score.

{% tabs %}
{% tab title="Adapters Description" %}
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
{% endtab %}

{% tab title="Adapters Impact" %}
| Adapter Name              | Description                             |
| ------------------------- | --------------------------------------- |
| ENS                       | by weight                               |
| Ethereum Balance          | by weight                               |
| Polygon Balance           | by weight                               |
| Ethereum NFTs             | by weight                               |
| Gnosis NFTs               | by weight                               |
| Polygon NFTs              | by weight                               |
| Ethereum Activity         | by weight                               |
| Recent Polygon Transfers  | by weight                               |
| Recent Ethereum Transfers | by weight                               |
| Ethereum ERC20 Tokens     | by weight                               |
| Snapshot                  | by weight                               |
| Proof of Humanity         | boosts total score by 10% if registered |
{% endtab %}
{% endtabs %}
