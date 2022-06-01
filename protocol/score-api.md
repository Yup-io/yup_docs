# Score API Documentation

{% hint style="success" %}
**Base URL:** [**`http://api.yup.io`**](http://api.yup.io)**``**
{% endhint %}

{% tabs %}
{% tab title="Request" %}
| Method | Endpoint                                | Description                                                            |
| ------ | --------------------------------------- | ---------------------------------------------------------------------- |
| `GET`  | `/score?address={ENS or ETH address}`   |  Returns a reputation score from 0-100 for an EVM address or ENS name  |

Rate limits: *50* requests per minute, per IP
Query params: &lt;&lt;address&gt;&lt; - any EVM address or ENS

**Scores TTL:** currently scores are refreshed after **1 day**

{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response Example" %}

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
               {
                  "name":"list.denarii.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"legendgames.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"klock.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"skynft.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"pool.denarii.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"satoshichained.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"vitalik.takoyaki.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"carsen.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"iamfuckingrich.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"vitalik-buterin.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"publicgod.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"denarius.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"elddem.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"denarii.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"v‍i‍t‍a‍l‍i‍k‍.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"vitalik.ethid.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"happybirthdayvitalik.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               },
               {
                  "name":"vitalik.eth",
                  "owner":{
                     "id":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                  }
               }
            ],
            "count":19
         },
         "eth_balance":{
            "score":78.51598768715968,
            "balance":39.25799384357984,
            "chain_id":"137"
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
            "related_addresses":[
               
            ],
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

```plain
 Score               *float64               `json:"score"`
 Ens                 *EnsResult             `json:"ens"`
 EthBalance          *NativeBalanceResult   `json:"eth_balance"`
 EthNfts             *NFTEthResult          `json:"eth_nfts"`
 GnosisNFts          *NFTGnosisResult       `json:"gnosis_nfts"`
 PolygonNfts         *NFTPolyResult         `json:"polygon_nfts"`
 PolygonBalance      *NativeBalanceResult   `json:"polygon_balance"`
 EthActivity         *EthActivityResult     `json:"eth_activity"`
 EthAge              *EthAgeResult          `json:"eth_age"`
 EthTxnCount         *EthTxnCountResult     `json:"eth_txn_count"`
 RecentPolyTransfers *RecentTransfersResult `json:"recent_polygon_transfers"`
 RecentEthTransfers  *RecentTransfersResult `json:"recent_eth_transfers"`
 EthERC20Tokens      *ETHERC20Result        `json:"eth_erc20_tokens"`
 Snapshot            *SnapshotResult        `json:"snapshot_votes"`
 PoH                 *PoHResult             `json:"poh"`
 Partial             bool                   `json:"partial"`
```

{% endtab %}
{% tab title="Adapters Weights" %}

```plain
var DefaultScoreWeights = ScoreWeights{
 Ens:                 0.14,
 EthBalance:          0.15,
 PolygonBalance:      0.15,
 PolygonNfts:         0.16,
 GnosisNFts:          0.064,
 EthNfts:             0.096,
 EthActivity:         0.08,
 RecentPolyTransfers: 0.04,
 RecentEthTransfers:  0.04,
 Snapshot:            0.04,
 EthERC20Tokens:      0.04,
}
```

{% endtab %}
{% endtabs %}

## Adapters

### Description

Adapters will generate a score that is integrated into the final score, each adapter has with own way of impacting the score, most adaptors impact the score directly by using a specific weight.

{% tabs %}
{% tab title="Adapters Description" %}
Adapter Name                             | Description                                                            |
 --------------------------------------- | ---------------------------------------------------------------------- |
ETH Balance   |  retrieves and scores ETH balance |
Polygon Balance  |  retrieves and scores Polygon balance |
ETH NFTs   |  retrieves and scores ETH NFTs  |
Gnosis NFTs   | retrieves and scores Gnosis (xdai) NFTs  |
Polygon NFTs |  retrieves and scores Polygon NFTs  |
ETH Activity |  retrieves and scores transactions on ETH chain |
ETH Age | retrieves and scores transactions TX age on ETH chain  |
ETH TX Count |  retrieves and scores transactions count |
Recent Poly Transfers |  retrieves and scores recent transactions on Polygon and also finds related addresses |
Recent ETH Transfers | retrieves and scores recent transactions on ETH and also finds related addresses  |
Eth ERC20 Tokens | retrieves and scores ERC20 tokens  |
Snapshot  | retrieves and scores snapshot votes  |
PoH |  retrieves POH status  |
{% endtab %}
{% tab title="Adapters Impact method" %}
Adapter Name                             | Description                                                            |
 --------------------------------------- | ---------------------------------------------------------------------- |
ETH Balance   |  by weight |
Polygon Balance  |   by weight |
ETH NFTs   |   by weight |
Gnosis NFTs   | by weight  |
Polygon NFTs |  by weight  |
ETH Activity |  by weight |
ETH Age |  by weight  |
ETH TX Count |  by weight |
Recent Poly Transfers |   by weight |
Recent ETH Transfers | by weight |
Eth ERC20 Tokens |  by weight|
Snapshot  |  by weight  |
PoH |  by boosting the total score by 10%  |
{% endtab %}
{% endtabs %}
