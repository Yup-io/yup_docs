# Yup API

{% hint style="success" %}
**Base URL:** [**`http://api.yup.io`**](http://api.yup.io/)**\`\`**
{% endhint %}

### GET Post 

{% tabs %}
{% tab title="Peticiones" %}
| Método | Endpoint | Utilización |
| :--- | :--- | :--- |
| `GET` | `/posts/post/{postid}` | Obtiene la información de un voto/post determinado. |
| `GET` | `/comments/post/{postid}` | Recoge los comentarios sobre un voto/post determinado. |
| `GET` | `/posts/interactions/{postid}` | Recoge las interacciones de los usuarios en una votación/post determinada. |
| `GET` | `/votes/post/{postid}/voter/{username}` | Obtiene el voto de un usuario en una votación/post determinado \(si existe\). |

Ejemplo: [https://api.yup.io/posts/post/12294](https://api.yup.io/posts/post/12294)
{% endtab %}

{% tab title="Respuesta" %}
[https://api.yup.io/posts/post/12294](https://api.yup.io/posts/post/12294)

```text
  {
    "avatar": "",
    "quantiles": {
      "overall": "none",
      "popularity": "none",
      "intelligence": "none",
      "funny": "none",
      "chill": "none",
      "useful": "none",
      "knowledgeable": "none",
      "engaging": "none",
      "easy": "none",
      "interesting": "none",
      "affordable": "none",
      "beautiful": "none",
      "expensive": "none",
      "wouldelect": "none",
      "agreewith": "none",
      "trustworthy": "none"
    },
    "weights": {
      "overall": 0,
      "popularity": 0,
      "intelligence": 0,
      "funny": 0,
      "chill": 0,
      "useful": 0,
      "knowledgeable": 0,
      "engaging": 0,
      "easy": 0,
      "interesting": 0,
      "affordable": 0,
      "beautiful": 0,
      "expensive": 0,
      "wouldelect": 0,
      "agreewith": 0,
      "trustworthy": 0
    },
    "sextiles": {
      "overall": "none",
      "popularity": "none",
      "intelligence": "none",
      "funny": "none",
      "chill": "none",
      "useful": "none",
      "knowledgeable": "none",
      "engaging": "none",
      "easy": "none",
      "interesting": "none",
      "affordable": "none",
      "beautiful": "none",
      "expensive": "none",
      "wouldelect": "none",
      "agreewith": "none",
      "trustworthy": "none"
    },
    "_id": {
      "postid": "12294"
    },
    "previewData": {
      "img": "https://i.ytimg.com/vi/hEMm7gxBYSc/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=hEMm7gxBYSc",
      "title": "Nirvana - Where Did You Sleep Last Night (Live On MTV Unplugged Unedited)",
      "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 #Nirvana #Whe..."
    },
    "tag": "youtube.com",
    "catVotes": {
      "overall": {
        "up": 2,
        "down": 0
      },
      "popularity": {
        "up": 2,
        "down": 0
      },
      "intelligence": {
        "up": 0,
        "down": 0
      },
      "funny": {
        "up": 0,
        "down": 0
      }
    },
    "rating": {
      "popularity": {
        "ratingAvg": 1,
        "ratingSum": 2,
        "ratingCount": 2
      },
      "overall": {
        "ratingAvg": 1,
        "ratingSum": 2,
        "ratingCount": 2
      }
    },
    "postConfirmed": false,
    "author": "yupcreators1",
    "timestamp": "1578275254500",
    "caption": "https://www.youtube.com/watch?v=hEMm7gxBYSc",
    "imgHash": "",
    "videoHash": "",
    "__v": 0,
    "lastUpdated": "1578275254500",
    "assocPostId": "10074"
  }
```
{% endtab %}
{% endtabs %}

### GET User

{% tabs %}
{% tab title="Peticiones" %}
| Método | Endpoint | Utilización |
| :--- | :--- | :--- |
| `GET` | `/levels` | Obtener todos los usuarios de Yup \(json extremadamente grande\). |
| `GET` | `/levels/users/{username}` |  |
| `GET` | `/accounts/{username}`. |  |
| `GET` | `/followers/{username}` | Obtener los seguidores de un determinado usuario de Yup. |
| `GET` | `/following/{username}` | Obtener las cuentas de los seguidores de un usuario Yup. |
| `GET` | `/accounts/actionusage/{eosname}` | Obtener el uso de la acción por el nombre del EOS del usuario. |

#### Ejemplo: [http://api.yup.io/levels/user/darren\_yup](http://api.yup.io/levels/user/darren_yup) o [http://api.yup.io/accounts/darren\_yup](http://api.yup.io/accounts/darren_yup)

#### 
{% endtab %}

{% tab title="Respuesta" %}
{% embed url="https://api.yup.io/posts/post/12294" caption="Ejemplo" %}

```text
  {
    "balance": {
      "EOS": 0,
      "YUPX": 98.8791,
      "YUP": 80.172,
      "YUPETH": 0
    },
    "total_stake": {
      "YUPETH": 0
    },
    "twitterInfo": {
      "_id": "5f6c3961769e4200111cee18",
      "avatar": "https://pbs.twimg.com/profile_images/1277686232764440576/3trk6EFd.jpg",
      "bio": "",
      "email": "darrenwng6@gmail.com",
      "fullname": "Darren Wang",
      "userId": "1277685255256674304",
      "username": "darren_yupio",
      "isTracked": true,
      "isMirror": false,
      "favorites": 284,
      "followers": 0,
      "friends": 57,
      "language": null,
      "location": "pale blue dot",
      "oauthType": "loginWithOAuth",
      "verified": false
    },
    "bio": "off to the races",
    "avatar": "https://ipfs.yup.io/ipfs/Qmf2FgbNFrEst6kAZWDty9jztjdhZHAtMwqExvwWAiWVn1",
    "fullname": "Darren",
    "weight": 99,
    "_id": "darrenyupxxx",
    "__v": 0,
    "eosname": "darrenyupxxx",
    "skey": "3461924983",
    "username": "darren_yup",
    "cum_deposit_time": 1335366,
    "claimed_creator_rewards": 0,
    "total_claimed_rewards": 0,
    "total_creator_rewards": 0,
    "total_vote_value": 3.0535885700480683,
    "quantile": "first",
    "sextile": "first"
  }
```
{% endtab %}
{% endtabs %}



