# Yup API

{% api-method method="get" host="https://api.yup.io" path="/notifications/{username}" %}
{% api-method-summary %}
Notifications
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="username" type="string" required=false %}
Username of user
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
GET 
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### GET Post 

{% tabs %}
{% tab title="Requests" %}
<table>
  <thead>
    <tr>
      <th style="text-align:left">Method</th>
      <th style="text-align:left">Endpoint</th>
      <th style="text-align:left">Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>GET</code>
      </td>
      <td style="text-align:left"><code>/posts/post/{postid}</code>
      </td>
      <td style="text-align:left">Fetch post information for a given vote/post.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>GET</code>
      </td>
      <td style="text-align:left"><code>/comments/post/{postid}</code>
      </td>
      <td style="text-align:left">
        <p>Fetch comments on a given vote/post.</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>GET</code>
      </td>
      <td style="text-align:left"><code>/posts/interactions/{postid}</code>
      </td>
      <td style="text-align:left">Fetch user interactions on a given vote/post.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>GET</code>
      </td>
      <td style="text-align:left"><code>/votes/post/{postid}/voter/{username}</code>
      </td>
      <td style="text-align:left">
        <p></p>
        <p>Fetch a user&apos;s vote on a given vote/post (if it exists).</p>
      </td>
    </tr>
  </tbody>
</table>

**Example:** [https://api.yup.io/posts/post/12294](https://api.yup.io/posts/post/12294)
{% endtab %}

{% tab title="Response" %}
[https://api.yup.io/posts/post/12294](https://api.yup.io/posts/post/12294)

```javascript
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

\*\*\*\*

* [https://api.yup.io/posts/post/12294](https://api.yup.io/posts/post/12294)

  ```javascript
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

### User

Method:

`GET`

`GET`

`GET`

`GET`

`GET`

`GET`

Endpoint:

`/levels`

`/levels/users/{username}`

`/accounts/{username}`

`/followers/{username}`

`/following/{username}`

`/accounts/actionusage/{eosname}`

Usage:

Fetch all Yup users \(extremely large json\).

Fetch data on a particular Yup user.

''

Fetch followers for a particular Yup user.

Fetch accounts followed by a Yup user.

Fetch action usage by user's EOS name.

Example:

* [http://api.yup.io/levels/user/darren\_yup](http://api.yup.io/levels/user/darren_yup) or [http://api.yup.io/accounts/darren\_yup](http://api.yup.io/accounts/darren_yup)

  ```javascript
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

### Category Feed

Method:

`GET`

Endpoint:

`/feed/category/{category}?start={#}&limit={#}`

Usage:

Fetch top posts in a specific category \(popularity, intelligence, smart, etc.\). Optional limit parameter.

\(for specific account\):

`/feed/category/{category}?start={#}&limit={#}/{username}`

Example:

* [http://api.yup.io/feed/category/popularity?start=0&limit=5](http://dev.api.yup.io/feed/category/popularity?start=1&limit=5)

  ```javascript
    [{
        "_id": {
          "postid": "3072"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/kPRA0W1kECg/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=kPRA0W1kECg",
          "title": "15 Sorting Algorithms in 6 Minutes",
          "description": "Visualization and \"audibilization\" of 15 Sorting Algorithms in 6 Minutes. Sorts random shuffles of integers, with both speed and the number of items adapted ..."
        },
        "tag": "youtube.com",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=kPRA0W1kECg",
        "imgHash": "",
        "lastUpdated": "1602396135000",
        "timestamp": "1602396135000",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "60.972082378444355",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "second",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "second",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3113"
        },
        "previewData": {
          "img": "https://pbs.twimg.com/media/EkH7cRtXYAEh9LV.jpg:large",
          "url": "https://twitter.com/staceyabrams/status/1315609036914655239",
          "title": "Stacey Abrams on Twitter",
          "description": "“GEORGIA VOTERS: Today, 10/12, is the first day to vote early in person! Go to https://t.co/XYLW8Buumc to find a location near you, and share the link with friends and family. #gapol \n\nNot in GA? Go to https://t.co/XYLW8Buumc to find information about voting in your state.”"
        },
        "tag": "twitter.com",
        "catVotes": {
          "popularity": {
            "up": 3,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 3,
            "ratingCount": 3,
            "ratingSum": 9
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 3,
            "ratingCount": 3,
            "ratingSum": 9
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/staceyabrams/status/1315609036914655239",
        "imgHash": "",
        "lastUpdated": "1602517552000",
        "timestamp": "1602517552000",
        "videoHash": "",
        "tweetInfo": {
          "created_at": "Mon Oct 12 11:03:31 +0000 2020",
          "id": 1315609036914655200,
          "id_str": "1315609036914655239",
          "full_text": "GEORGIA VOTERS: Today, 10/12, is the first day to vote early in person! Go to https://t.co/XYLW8Buumc to find a location near you, and share the link with friends and family. #gapol \n\nNot in GA? Go to https://t.co/XYLW8Buumc to find information about voting in your state. https://t.co/2zYM6fl7Aj",
          "truncated": false,
          "display_text_range": [
            0,
            272
          ],
          "entities": {
            "hashtags": [{
              "text": "gapol",
              "indices": [
                175,
                181
              ]
            }],
            "symbols": [],
            "user_mentions": [],
            "urls": [{
                "url": "https://t.co/XYLW8Buumc",
                "expanded_url": "http://iWillVote.com",
                "display_url": "iWillVote.com",
                "indices": [
                  78,
                  101
                ]
              },
              {
                "url": "https://t.co/XYLW8Buumc",
                "expanded_url": "http://iWillVote.com",
                "display_url": "iWillVote.com",
                "indices": [
                  201,
                  224
                ]
              }
            ],
            "media": [{
              "id": 1315609029377482800,
              "id_str": "1315609029377482753",
              "indices": [
                273,
                296
              ],
              "media_url": "http://pbs.twimg.com/media/EkH7cRtXYAEh9LV.jpg",
              "media_url_https": "https://pbs.twimg.com/media/EkH7cRtXYAEh9LV.jpg",
              "url": "https://t.co/2zYM6fl7Aj",
              "display_url": "pic.twitter.com/2zYM6fl7Aj",
              "expanded_url": "https://twitter.com/staceyabrams/status/1315609036914655239/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 2048,
                  "h": 1152,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                }
              }
            }]
          },
          "extended_entities": {
            "media": [{
              "id": 1315609029377482800,
              "id_str": "1315609029377482753",
              "indices": [
                273,
                296
              ],
              "media_url": "http://pbs.twimg.com/media/EkH7cRtXYAEh9LV.jpg",
              "media_url_https": "https://pbs.twimg.com/media/EkH7cRtXYAEh9LV.jpg",
              "url": "https://t.co/2zYM6fl7Aj",
              "display_url": "pic.twitter.com/2zYM6fl7Aj",
              "expanded_url": "https://twitter.com/staceyabrams/status/1315609036914655239/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 2048,
                  "h": 1152,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                }
              }
            }]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 216065430,
            "id_str": "216065430",
            "name": "Stacey Abrams",
            "screen_name": "staceyabrams",
            "location": "Georgia",
            "description": "Founder of @fairfightaction & @faircount & @The_SEAP. Co-founder @NowAccount. AKA Selena Montgomery. #AllInForVoting - 9/18 Amazon. Available: #OurTimeIsNow👇🏾",
            "url": "https://t.co/JRsXXXIppa",
            "entities": {
              "url": {
                "urls": [{
                  "url": "https://t.co/JRsXXXIppa",
                  "expanded_url": "https://static.macmillan.com/static/holt/our-time-is-now",
                  "display_url": "static.macmillan.com/static/holt/ou…",
                  "indices": [
                    0,
                    23
                  ]
                }]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 875174,
            "friends_count": 1753,
            "listed_count": 3387,
            "created_at": "Mon Nov 15 18:12:10 +0000 2010",
            "favourites_count": 6299,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 12422,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1287494024383913988/gLOkh4PS_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1287494024383913988/gLOkh4PS_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/216065430/1549898895",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 1777,
          "favorite_count": 4970,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "90.728644118390804",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "first",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "first",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3195"
        },
        "tag": "general",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "Fake caption",
        "imgHash": "",
        "lastUpdated": "1602760345500",
        "timestamp": "1602760345500",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "20",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3200"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/k1v7_zScivQ/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=k1v7_zScivQ",
          "title": "Apple iPhone 12 Lineup Reactions!",
          "description": "iPhone 12 Reactions. iPhone 12 Mini thoughts. And iPhone 12 Pro facts. MagSafe is back! That shirt! http://shop.MKBHD.com ExpressVPN: http://expressvpn.com/M..."
        },
        "tag": "general",
        "catVotes": {
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
          },
          "overall": {
            "up": 2,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 2,
            "ratingSum": 2
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 2,
            "ratingSum": 2
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=k1v7_zScivQ",
        "imgHash": "",
        "lastUpdated": "1602796420000",
        "timestamp": "1602796420000",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "31.453255599176476",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3201"
        },
        "previewData": {
          "img": null,
          "url": "https://www.google.com/sorry/index?continue=https://youtube.com/watch%3Fv%3DGFv_-fNvXqA&q=EgQS6DHHGIKDo_wFIhkA8aeDS_g2CcgpBoJUhFyfFlMEl43S4wz2MgFy",
          "title": "https://youtube.com/watch?v=GFv_-fNvXqA",
          "description": null
        },
        "tag": "general",
        "catVotes": {
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
          },
          "overall": {
            "up": 2,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 2,
            "ratingSum": 2
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 2,
            "ratingSum": 2
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=GFv_-fNvXqA",
        "imgHash": "",
        "lastUpdated": "1602797952500",
        "timestamp": "1602797952500",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "31.455990508669029",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3203"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/6LpQmLNkaa4/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=6LpQmLNkaa4",
          "title": "Back to School With Elmo :60 | Coronavirus Response | Ad Council",
          "description": "The Ad Council - in partnership with the federal government, public health partners, board member companies, major media networks and digital platforms - lau..."
        },
        "tag": "general",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 2
          },
          "intelligence": {
            "up": 1,
            "down": 0
          },
          "funny": {
            "up": 1,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 2
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 0.33333333333333326,
            "ratingCount": 3,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "funny": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "overall": {
            "ratingAvg": 0.6,
            "ratingCount": 5,
            "ratingSum": 3
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=6LpQmLNkaa4",
        "imgHash": "",
        "lastUpdated": "1602799112500",
        "timestamp": "1602799112500",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": "20",
          "intelligence": "20",
          "interesting": null,
          "knowledgeable": null,
          "popularity": "20",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "fourth",
          "intelligence": "fourth",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "fourth",
          "intelligence": "fourth",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      }
    ]
  ```

### Specific Feed

Method:

`GET`

Endpoint:

`/feed/{feed}/?start={#}&limit={#}`

Usage:

Fetch top posts in a specific category of feed. Optional limit parameter.

Example:

* [http://api.yup.io/posts/discover?start=0&limit=5](http://api.yup.io/posts/discover?start=0&limit=5)

  ```javascript
    [{
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81487"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=nZ_lYVp9TMg",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158244000",
        "rating": {
          "popularity": {
            "ratingAvg": 2,
            "ratingCount": 1,
            "ratingSum": 2
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 2,
            "ratingCount": 1,
            "ratingSum": 2
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603158244000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/nZ_lYVp9TMg/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=nZ_lYVp9TMg",
          "title": "I bought the cheapest \"Gaming\" pre-built PC from Best Buy",
          "description": "#bestbuy #prebuilt #doesanyonestill# I bought the cheapest \"gaming\" branded pre-built from Best Buy to see if it's any good. It's not the worst thing ever, b..."
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81486"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?reload=9&v=EDE3ZXBeMdo",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158244000",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603158244000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/EDE3ZXBeMdo/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?reload=9&v=EDE3ZXBeMdo",
          "title": "How Many Gallons of Soup Does a Washer Machine Cook?",
          "description": "The first 1000 people to use this link will get a free trial of Skillshare Premium Membership: https://skl.sh/thekingofrandom09201 Today we finally make soup..."
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81485"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/crystalrose/status/1318289595583397890",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158088500",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "twitter.com",
        "timestamp": "1603158088500",
        "videoHash": "",
        "previewData": {
          "img": "https://pbs.twimg.com/media/EkuBZZeXgAAiZ27.jpg:large",
          "url": "https://twitter.com/crystalrose/status/1318289595583397890",
          "title": "Crystal Rose ⚡️ on Twitter",
          "description": "“Mining #crypto while chatting ⚡️💬 \nMy earning rate just went up to 9.3 $SENSE per hour on @SenseChat”"
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81484"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/EOS42io/status/1318297358526947328",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158082500",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "twitter.com",
        "timestamp": "1603158082500",
        "videoHash": "",
        "previewData": {
          "img": "https://pbs.twimg.com/card_img/1318273799893209088/xQgy81ZM?format=jpg&name=600x314",
          "url": "https://twitter.com/EOS42io/status/1318297358526947328",
          "title": "EOS42 on Twitter",
          "description": "“Liquidapps product suite is now interoperable. #EOS can cross leverage liquidity while other protocols can access scaling solutions they desperately need. \n@LiquidAppsIO \n\nhttps://t.co/Vsx49K2DKW”"
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81483"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=iy_1r0kEBeg",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603154466000",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603154466000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/iy_1r0kEBeg/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=iy_1r0kEBeg",
          "title": "SMTM9 [SUB ESP] - D.Ark - Life",
          "description": "👉🏻📱 Facebook con KHH: https://www.facebook.com/smtmlatino 👉🏻📱 Pagina de gameplays: https://www.facebook.com/iverkhh 👉🏻📱 Instagram: https://www.instagram.com/..."
        }
      }
    ]
  ```

* [https://dev.api.yup.io/feed/election2020/?start=0&limit=5](https://dev.api.yup.io/feed/election2020/?start=0&limit=5)

  ```javascript
    [{
        "_id": {
          "postid": "3098"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/0D-PRJuUDoc/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=0D-PRJuUDoc",
          "title": "Deal or No Deal Cold Open - SNL",
          "description": "Steve Harvey (Kenan Thompson) hosts a special Deal or No Deal where President Trump (Alec Baldwin) fields offers from members of Congress, like Nancy Pelosi ..."
        },
        "tag": "general",
        "catVotes": {
          "popularity": {
            "up": 0,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 3,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 1,
            "ratingCount": 3,
            "ratingSum": 3
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 3,
            "ratingSum": 3
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=0D-PRJuUDoc",
        "imgHash": "",
        "lastUpdated": "1602507320500",
        "timestamp": "1602507320500",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": "26.496620536782249",
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": null,
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "fourth",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "none",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "fourth",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "none",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3101"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/0D-PRJuUDoc/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=0D-PRJuUDoc",
          "title": "Deal or No Deal Cold Open - SNL",
          "description": "Steve Harvey (Kenan Thompson) hosts a special Deal or No Deal where President Trump (Alec Baldwin) fields offers from members of Congress, like Nancy Pelosi ..."
        },
        "tag": "general",
        "catVotes": {
          "popularity": {
            "up": 3,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 2,
            "ratingCount": 3,
            "ratingSum": 6
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 2,
            "ratingCount": 3,
            "ratingSum": 6
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=0D-PRJuUDoc",
        "imgHash": "",
        "lastUpdated": "1602508125500",
        "timestamp": "1602508125500",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "83.794903374165585",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "first",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "first",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3102"
        },
        "previewData": {
          "img": "https://i.ytimg.com/vi/0D-PRJuUDoc/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=0D-PRJuUDoc",
          "title": "Deal or No Deal Cold Open - SNL",
          "description": "Steve Harvey (Kenan Thompson) hosts a special Deal or No Deal where President Trump (Alec Baldwin) fields offers from members of Congress, like Nancy Pelosi ..."
        },
        "tag": "general",
        "catVotes": {
          "popularity": {
            "up": 3,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 3,
            "ratingSum": 3
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 3,
            "ratingSum": 3
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=0D-PRJuUDoc",
        "imgHash": "",
        "lastUpdated": "1602508310000",
        "timestamp": "1602508310000",
        "videoHash": "",
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "41.088962949955175",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "third",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "third",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3122"
        },
        "previewData": {
          "img": "https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg",
          "url": "https://twitter.com/JoeBiden/status/1315719382182526976",
          "title": "Joe Biden on Twitter",
          "description": "“I know Americans aren’t looking for a handout. They just want a fair chance to get ahead — and I’ll work every day to make sure folks get that chance.”"
        },
        "tag": "twitter.com",
        "catVotes": {
          "popularity": {
            "up": 3,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 3,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 2,
            "ratingCount": 3,
            "ratingSum": 6
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 2,
            "ratingCount": 3,
            "ratingSum": 6
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/JoeBiden/status/1315719382182526976",
        "imgHash": "",
        "lastUpdated": "1602533199000",
        "timestamp": "1602533199000",
        "videoHash": "",
        "tweetInfo": {
          "created_at": "Mon Oct 12 18:22:00 +0000 2020",
          "id": 1315719382182527000,
          "id_str": "1315719382182526976",
          "full_text": "I know Americans aren’t looking for a handout. They just want a fair chance to get ahead — and I’ll work every day to make sure folks get that chance.",
          "truncated": false,
          "display_text_range": [
            0,
            150
          ],
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": []
          },
          "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 939091,
            "id_str": "939091",
            "name": "Joe Biden",
            "screen_name": "JoeBiden",
            "location": "Wilmington, DE",
            "description": "Senator, Vice President, 2020 candidate for President of the United States, husband to @DrBiden, proud father & grandfather. Loves ice cream, aviators & @Amtrak",
            "url": "https://t.co/UClrPuJpyZ",
            "entities": {
              "url": {
                "urls": [{
                  "url": "https://t.co/UClrPuJpyZ",
                  "expanded_url": "http://joebiden.com",
                  "display_url": "joebiden.com",
                  "indices": [
                    0,
                    23
                  ]
                }]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 11049090,
            "friends_count": 29,
            "listed_count": 22273,
            "created_at": "Sun Mar 11 17:51:24 +0000 2007",
            "favourites_count": 20,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 6221,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "565959",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/939091/1600780971",
            "profile_link_color": "233F94",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EBEBFF",
            "profile_text_color": "323232",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 17412,
          "favorite_count": 130424,
          "favorited": false,
          "retweeted": false,
          "lang": "en"
        },
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "20",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3132"
        },
        "previewData": {
          "img": "https://pbs.twimg.com/card_img/1313290391714754565/Ri2Dg2ef?format=jpg&name=600x314",
          "url": "https://twitter.com/DemWrite/status/1315788889752174592",
          "title": "Nick Knudsen 🇺🇸 on Twitter",
          "description": "“#WISCONSIN Voter Alert!\n\nBallots must be RECEIVED by election day, 11/3, to count. A previous rule that ballots needed to be postmarked by that day was overruled (thanks GOP). \n\nMail ballots ASAP to make sure they arrive on time. \n\n#DemCastWI\nhttps://t.co/ffbUPcdRpq”"
        },
        "tag": "twitter.com",
        "catVotes": {
          "popularity": {
            "up": 4,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 4,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 1.5,
            "ratingCount": 4,
            "ratingSum": 6
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1.5,
            "ratingCount": 4,
            "ratingSum": 6
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/DemWrite/status/1315788889752174592",
        "imgHash": "",
        "lastUpdated": "1602548643500",
        "timestamp": "1602548643500",
        "videoHash": "",
        "tweetInfo": {
          "created_at": "Mon Oct 12 22:58:12 +0000 2020",
          "id": 1315788889752174600,
          "id_str": "1315788889752174592",
          "full_text": "#WISCONSIN Voter Alert!\n\nBallots must be RECEIVED by election day, 11/3, to count. A previous rule that ballots needed to be postmarked by that day was overruled (thanks GOP). \n\nMail ballots ASAP to make sure they arrive on time. \n\n#DemCastWI\nhttps://t.co/ffbUPcdRpq",
          "truncated": false,
          "display_text_range": [
            0,
            266
          ],
          "entities": {
            "hashtags": [{
                "text": "WISCONSIN",
                "indices": [
                  0,
                  10
                ]
              },
              {
                "text": "DemCastWI",
                "indices": [
                  232,
                  242
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [{
              "url": "https://t.co/ffbUPcdRpq",
              "expanded_url": "https://bit.ly/3dnptyx",
              "display_url": "bit.ly/3dnptyx",
              "indices": [
                243,
                266
              ]
            }]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 798953701972938800,
            "id_str": "798953701972938752",
            "name": "Nick Knudsen 🇺🇸",
            "screen_name": "DemWrite",
            "location": "Portland, OR",
            "description": "Executive Director @DemCastUSA 🇺🇸 Editor-In-Chief, DemWritePress. Writing: @PatNotPart @HuffPost. Refusing to give up on US. 🏳️‍🌈",
            "url": "https://t.co/h0bTlo81fW",
            "entities": {
              "url": {
                "urls": [{
                  "url": "https://t.co/h0bTlo81fW",
                  "expanded_url": "http://www.DemCast.com/Focus14",
                  "display_url": "DemCast.com/Focus14",
                  "indices": [
                    0,
                    23
                  ]
                }]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 179213,
            "friends_count": 14894,
            "listed_count": 718,
            "created_at": "Wed Nov 16 18:19:41 +0000 2016",
            "favourites_count": 71287,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 60802,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1252470219232014337/5mzgTlRw_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1252470219232014337/5mzgTlRw_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/798953701972938752/1595679998",
            "profile_link_color": "19CF86",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 934,
          "favorite_count": 998,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "20",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "fourth",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      },
      {
        "_id": {
          "postid": "3133"
        },
        "previewData": {
          "img": "https://pbs.twimg.com/card_img/1313290391714754565/Ri2Dg2ef?format=jpg&name=600x314",
          "url": "https://twitter.com/DemWrite/status/1315788889752174592",
          "title": "Nick Knudsen 🇺🇸 on Twitter",
          "description": "“#WISCONSIN Voter Alert!\n\nBallots must be RECEIVED by election day, 11/3, to count. A previous rule that ballots needed to be postmarked by that day was overruled (thanks GOP). \n\nMail ballots ASAP to make sure they arrive on time. \n\n#DemCastWI\nhttps://t.co/ffbUPcdRpq”"
        },
        "tag": "twitter.com",
        "catVotes": {
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
          },
          "overall": {
            "up": 2,
            "down": 0
          }
        },
        "rating": {
          "popularity": {
            "ratingAvg": 2,
            "ratingCount": 2,
            "ratingSum": 4
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 2,
            "ratingCount": 2,
            "ratingSum": 4
          }
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/DemWrite/status/1315788889752174592",
        "imgHash": "",
        "lastUpdated": "1602549088500",
        "timestamp": "1602549088500",
        "videoHash": "",
        "tweetInfo": {
          "created_at": "Mon Oct 12 22:58:12 +0000 2020",
          "id": 1315788889752174600,
          "id_str": "1315788889752174592",
          "full_text": "#WISCONSIN Voter Alert!\n\nBallots must be RECEIVED by election day, 11/3, to count. A previous rule that ballots needed to be postmarked by that day was overruled (thanks GOP). \n\nMail ballots ASAP to make sure they arrive on time. \n\n#DemCastWI\nhttps://t.co/ffbUPcdRpq",
          "truncated": false,
          "display_text_range": [
            0,
            266
          ],
          "entities": {
            "hashtags": [{
                "text": "WISCONSIN",
                "indices": [
                  0,
                  10
                ]
              },
              {
                "text": "DemCastWI",
                "indices": [
                  232,
                  242
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [{
              "url": "https://t.co/ffbUPcdRpq",
              "expanded_url": "https://bit.ly/3dnptyx",
              "display_url": "bit.ly/3dnptyx",
              "indices": [
                243,
                266
              ]
            }]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 798953701972938800,
            "id_str": "798953701972938752",
            "name": "Nick Knudsen 🇺🇸",
            "screen_name": "DemWrite",
            "location": "Portland, OR",
            "description": "Executive Director @DemCastUSA 🇺🇸 Editor-In-Chief, DemWritePress. Writing: @PatNotPart @HuffPost. Refusing to give up on US. 🏳️‍🌈",
            "url": "https://t.co/h0bTlo81fW",
            "entities": {
              "url": {
                "urls": [{
                  "url": "https://t.co/h0bTlo81fW",
                  "expanded_url": "http://www.DemCast.com/Focus14",
                  "display_url": "DemCast.com/Focus14",
                  "indices": [
                    0,
                    23
                  ]
                }]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 179213,
            "friends_count": 14894,
            "listed_count": 718,
            "created_at": "Wed Nov 16 18:19:41 +0000 2016",
            "favourites_count": 71287,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 60802,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1252470219232014337/5mzgTlRw_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1252470219232014337/5mzgTlRw_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/798953701972938752/1595679998",
            "profile_link_color": "19CF86",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 934,
          "favorite_count": 998,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_appealable": false,
          "lang": "en"
        },
        "weights": {
          "affordable": null,
          "agreewith": null,
          "beautiful": null,
          "chill": null,
          "easy": null,
          "engaging": null,
          "funny": null,
          "intelligence": null,
          "interesting": null,
          "knowledgeable": null,
          "popularity": "51.315892319385284",
          "trustworthy": null,
          "wouldelect": null
        },
        "sextiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "third",
          "trustworthy": "none",
          "wouldelect": "none"
        },
        "quantiles": {
          "affordable": "none",
          "agreewith": "none",
          "beautiful": "none",
          "chill": "none",
          "easy": "none",
          "engaging": "none",
          "funny": "none",
          "intelligence": "none",
          "interesting": "none",
          "knowledgeable": "none",
          "popularity": "third",
          "trustworthy": "none",
          "wouldelect": "none"
        }
      }
    ]
  ```

### Lists

Method:

`GET`

`GET`

Endpoint:

`/v1/lists`

`/v1/lists/listInfo`

Usage:

Fetch all possible list options.

Example:

* [http://api.yup.io/v1/lists/listInfo](http://api.yup.io/v1/lists/listInfo)

  ```javascript
    [{
        "location": {
          "name": "twitter",
          "displayName": "Twitter"
        },
        "subject": {
          "name": "users",
          "displayName": "accounts"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 10,
        "_id": "twitter:users",
        "preposition": "on",
        "re": "^((http:|https:)([/][/]))?(www.)?twitter.com/[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "twitter.com"
      },
      {
        "location": {
          "name": "reddit",
          "displayName": "Reddit"
        },
        "subject": {
          "name": "subs",
          "displayName": "subreddits"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "reddit:subs",
        "preposition": "on",
        "re": "^((http:|https:)([/][/]))?(www.)?reddit.com/r/[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "reddit.com"
      },
      {
        "location": {
          "name": "youtube",
          "displayName": "YouTube"
        },
        "subject": {
          "name": "channels",
          "displayName": "channels"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "youtube:channels",
        "preposition": "on",
        "re": "^((http:|https:)([/][/]))?(www.)?(youtube.com/channel/)[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "youtube.com"
      },
      {
        "location": {
          "name": "columbia-course-registration",
          "displayName": "Columbia"
        },
        "subject": {
          "name": "professors",
          "displayName": "professors"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "professor",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "columbia-course-registration:professors",
        "preposition": "at",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "knowledgeable",
            "displayName": "most knowledgeable"
          },
          {
            "name": "engaging",
            "displayName": "most engaging"
          },
          {
            "name": "chill",
            "displayName": "chillest"
          }
        ],
        "tag": "columbia-course-registration/professor"
      },
      {
        "location": {
          "name": "reddit",
          "displayName": "Reddit"
        },
        "subject": {
          "name": "users",
          "displayName": "accounts"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "reddit:users",
        "preposition": "on",
        "re": "^((http:|https:)([/][/]))?(www.)?reddit.com/user/[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "reddit.com"
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "podcasts",
          "displayName": "podcasts"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:podcasts",
        "re": "^((http:|https:)([/][/]))?(www.)?(open.spotify.com/show/)[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "podcast"
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "articles",
          "displayName": "articles"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:articles",
        "re": "^((http:|https:)([/][/]))?(www.)?(cnn.com/20..)[^/]*[/]*|^((http:|https:)([/][/]))?(www.)?(wired.com/story/)[^/]*[/]*|^((http:|https:)([/][/]))?(www.)?(foxnews.com/)[^/]*[/][^/]*$|^((http:|https:)([/][/]))?(www.)?(techcrunch.com/)[^/]*[/][^/]*[/][^/]*[/][^/]*|^((http:|https:)([/][/]))?(www.)?(medium.com/)[^/]*[/][^/]*$|^((http:|https:)([/][/]))?(www.)?(nytimes.com/)[^/]*[/][^/]*[/][^/]*",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "articles"
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "films",
          "displayName": "movies/shows"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:films",
        "re": "^((http:|https:)([/][/]))?(www.)?(netflix.com/title/)[^/]*[/]?$|^((http:|https:)([/][/]))?(www.)?(hulu.com)[/](series|movie)[/][^/]*$|^((http:|https:)([/][/]))?(www.)?(play.hbogo.com/series/)[^/]*?$|^((http:|https:)([/][/]))?(www.)?(showtime.com/#)[/](series|movie)[/]*[/]*[/]",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "films"
      },
      {
        "location": {
          "name": "youtube",
          "displayName": "YouTube"
        },
        "subject": {
          "name": "videos",
          "displayName": "videos"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "video",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "youtube:videos",
        "preposition": "on",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "re": "^((http:|https:)([/][/]))?(www.)?(youtube.com/watch)[/]?",
        "tag": "youtube.com"
      },
      {
        "location": {
          "name": "columbia-course-registration",
          "displayName": "Columbia"
        },
        "subject": {
          "name": "courses",
          "displayName": "courses"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "course",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "columbia-course-registration:courses",
        "preposition": "at",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "easy",
            "displayName": "easiest"
          },
          {
            "name": "interesting",
            "displayName": "most interesting"
          },
          {
            "name": "useful",
            "displayName": "most useful"
          }
        ],
        "tag": "columbia-course-registration/course"
      },
      {
        "location": {
          "name": "uspresidentialelection",
          "displayName": "the Election",
          "altName": "the US Election"
        },
        "subject": {
          "name": "candidates",
          "displayName": "candidates"
        },
        "initialItems": [
          "https://twitter.com/JoeBiden",
          "https://twitter.com/realDonaldTrump"
        ],
        "labels": [],
        "listType": "static",
        "postType": "default",
        "searchEnabled": false,
        "displayPriority": 0,
        "_id": "uspresidentialelection:candidates",
        "preposition": "in",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "trustworthy",
            "displayName": "most trustworthy"
          },
          {
            "name": "wouldelect",
            "displayName": "most electable"
          },
          {
            "name": "agreewith",
            "displayName": "most agreed with"
          }
        ],
        "race": true
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "playlists",
          "displayName": "playlists"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:playlists",
        "re": "^((http:|https:)([/][/]))?(www.)?(open.spotify.com/playlist/)[^/]*[/]?$|^((http:|https:)([/][/]))?(www.)?(soundcloud.com/.*/sets)[/]?",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "playlist"
      },
      {
        "location": {
          "name": "twitter",
          "displayName": "Twitter"
        },
        "subject": {
          "name": "statuses",
          "displayName": "tweets"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "tweet",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "twitter:statuses",
        "preposition": "on",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "twitter.com"
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "artists",
          "displayName": "artists (music)"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "default",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:artists",
        "re": "^((http:|https:)([/][/]))?(www.)?(open.spotify.com/artist/)[^/]*[/]?$|^((http:|https:)([/][/]))?(www.)?(soundcloud.com/)[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "artists"
      },
      {
        "location": {
          "name": "all",
          "displayName": "all"
        },
        "subject": {
          "name": "websites",
          "displayName": "websites"
        },
        "initialItems": [],
        "labels": [],
        "listType": "dynamic",
        "postType": "preview",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "all:websites",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ]
      },
      {
        "location": {
          "name": "twitter",
          "displayName": "Twitter"
        },
        "subject": {
          "name": "crypto",
          "displayName": "thought leaders (crypto)"
        },
        "initialItems": [
          "https://twitter.com/aantonop",
          "https://twitter.com/VitalikButerin",
          "https://twitter.com/ErikVoorhees",
          "https://twitter.com/adam3us",
          "https://twitter.com/NickSzabo4",
          "https://twitter.com/balajis",
          "https://twitter.com/starkness",
          "https://twitter.com/lopp",
          "https://twitter.com/TuurDemeester",
          "https://twitter.com/zooko",
          "https://twitter.com/gavinandresen",
          "https://twitter.com/brian_armstrong",
          "https://twitter.com/pmarca",
          "https://twitter.com/peterktodd",
          "https://twitter.com/naval",
          "https://twitter.com/pwuille",
          "https://twitter.com/barrysilbert",
          "https://twitter.com/FEhrsam",
          "https://twitter.com/el33th4xor",
          "https://twitter.com/SatoshiLite",
          "https://twitter.com/twobitidiot",
          "https://twitter.com/Melt_Dem",
          "https://twitter.com/TheBlueMatt",
          "https://twitter.com/jgarzik",
          "https://twitter.com/orionwl",
          "https://twitter.com/rogerkver",
          "https://twitter.com/cdixon",
          "https://twitter.com/fredwilson",
          "https://twitter.com/laurashin",
          "https://twitter.com/NeerajKA",
          "https://twitter.com/VladZamfir",
          "https://twitter.com/cburniske",
          "https://twitter.com/roasbeef",
          "https://twitter.com/msantoriESQ",
          "https://twitter.com/jonmatonis",
          "https://twitter.com/kyletorpey",
          "https://twitter.com/bendavenport",
          "https://twitter.com/ethereumJoseph",
          "https://twitter.com/WhalePanda",
          "https://twitter.com/AriDavidPaul",
          "https://twitter.com/AaronvanW",
          "https://twitter.com/Excellion",
          "https://twitter.com/nic__carter",
          "https://twitter.com/eric_lombrozo",
          "https://twitter.com/matthew_d_green",
          "https://twitter.com/valkenburgh",
          "https://twitter.com/VinnyLingham",
          "https://twitter.com/jimmysong",
          "https://twitter.com/socrates1024",
          "https://twitter.com/brucefenton",
          "https://twitter.com/jerrybrito",
          "https://twitter.com/CharlieShrem",
          "https://twitter.com/jack",
          "https://twitter.com/fluffypony",
          "https://twitter.com/CremeDeLaCrypto",
          "https://twitter.com/eiaine",
          "https://twitter.com/bramcohen",
          "https://twitter.com/neha",
          "https://twitter.com/morcosa",
          "https://twitter.com/jespow",
          "https://twitter.com/jillruthcarlson",
          "https://twitter.com/ljxie",
          "https://twitter.com/AriannaSimpson",
          "https://twitter.com/prestonjbyrne",
          "https://twitter.com/La__Cuen",
          "https://twitter.com/AmberBaldet",
          "https://twitter.com/tylerwinklevoss",
          "https://twitter.com/cz_binance",
          "https://twitter.com/gavofyork",
          "https://twitter.com/mikejcasey",
          "https://twitter.com/danheld",
          "https://twitter.com/ChristopherA",
          "https://twitter.com/PeterMcCormack",
          "https://twitter.com/nntaleb",
          "https://twitter.com/ryaneshea",
          "https://twitter.com/slush",
          "https://twitter.com/APompliano",
          "https://twitter.com/brianchoffman",
          "https://twitter.com/SDLerner",
          "https://twitter.com/katherineykwu",
          "https://twitter.com/muneeb",
          "https://twitter.com/JihanWu",
          "https://twitter.com/oleganza",
          "https://twitter.com/virtuallylaw",
          "https://twitter.com/alansilbert",
          "https://twitter.com/CaitlinLong_",
          "https://twitter.com/bhorowitz",
          "https://twitter.com/_jonasschnelli_",
          "https://twitter.com/pierre_rochard",
          "https://twitter.com/niccary",
          "https://twitter.com/cnLedger",
          "https://twitter.com/Truthcoin",
          "https://twitter.com/alexbosworth",
          "https://twitter.com/nathanielpopper",
          "https://twitter.com/udiWertheimer",
          "https://twitter.com/juanbenet",
          "https://twitter.com/brockpierce",
          "https://twitter.com/LukeDashjr",
          "https://twitter.com/JeremyRubin",
          "https://twitter.com/novogratz",
          "https://twitter.com/francispouliot_",
          "https://twitter.com/maraoz",
          "https://twitter.com/paulvigna",
          "https://twitter.com/joeykrug",
          "https://twitter.com/nejc_kodric",
          "https://twitter.com/tayvano_",
          "https://twitter.com/woonomic",
          "https://twitter.com/winklevoss",
          "https://twitter.com/ToneVays",
          "https://twitter.com/AlenaSatoshi",
          "https://twitter.com/alistairmilne",
          "https://twitter.com/tdryja",
          "https://twitter.com/kanzure",
          "https://twitter.com/ercwl",
          "https://twitter.com/simondlr",
          "https://twitter.com/austinhill",
          "https://twitter.com/dan_pantera",
          "https://twitter.com/martindale",
          "https://twitter.com/random_walker",
          "https://twitter.com/btcdrak",
          "https://twitter.com/giacomozucco",
          "https://twitter.com/MarcHochstein",
          "https://twitter.com/NTmoney",
          "https://twitter.com/pete_rizzo_",
          "https://twitter.com/maxkeiser",
          "https://twitter.com/sama",
          "https://twitter.com/mir_btc",
          "https://twitter.com/bitcoinmom",
          "https://twitter.com/TraceMayer",
          "https://twitter.com/arjunblj",
          "https://twitter.com/phildaian",
          "https://twitter.com/hasufl",
          "https://twitter.com/bobbyclee",
          "https://twitter.com/pamelawjd",
          "https://twitter.com/JackMallers",
          "https://twitter.com/OneMorePeter",
          "https://twitter.com/Snyke",
          "https://twitter.com/matt_odell",
          "https://twitter.com/nvk",
          "https://twitter.com/AlyseKilleen",
          "https://twitter.com/jfnewbery",
          "https://twitter.com/TimDraper",
          "https://twitter.com/DoveyWan",
          "https://twitter.com/rusty_twit",
          "https://twitter.com/nlw",
          "https://twitter.com/jcp",
          "https://twitter.com/CryptoHayes",
          "https://twitter.com/IOHK_Charles",
          "https://twitter.com/adamludwin",
          "https://twitter.com/KyleSamani",
          "https://twitter.com/PerianneDC",
          "https://twitter.com/joonian",
          "https://twitter.com/zmanian",
          "https://twitter.com/avsa",
          "https://twitter.com/ofnumbers",
          "https://twitter.com/jerallaire",
          "https://twitter.com/acityinohio",
          "https://twitter.com/AdamDraper",
          "https://twitter.com/MrChrisEllis",
          "https://twitter.com/wheatpond",
          "https://twitter.com/MatthewRoszak",
          "https://twitter.com/davidmarcus",
          "https://twitter.com/iamjosephyoung",
          "https://twitter.com/bitstein",
          "https://twitter.com/diiorioanthony",
          "https://twitter.com/cryptograffiti",
          "https://twitter.com/sysmannet",
          "https://twitter.com/hudsonjameson",
          "https://twitter.com/NicolasDorier",
          "https://twitter.com/danrobinson",
          "https://twitter.com/chamath",
          "https://twitter.com/katie_haun",
          "https://twitter.com/jony_levin",
          "https://twitter.com/MustStopMurad",
          "https://twitter.com/koeppelmann",
          "https://twitter.com/ArthurB",
          "https://twitter.com/patrickc",
          "https://twitter.com/Joi",
          "https://twitter.com/real_vijay",
          "https://twitter.com/mikebelshe",
          "https://twitter.com/saifedean",
          "https://twitter.com/bcrypt",
          "https://twitter.com/jutta_steiner",
          "https://twitter.com/ricburton",
          "https://twitter.com/DelRayMan",
          "https://twitter.com/LarryBitcoin",
          "https://twitter.com/spair",
          "https://twitter.com/BobMcElrath",
          "https://twitter.com/stephendpalley",
          "https://twitter.com/BrendanEich",
          "https://twitter.com/billbarhydt",
          "https://twitter.com/lightcoin",
          "https://twitter.com/iam_preethi",
          "https://twitter.com/leashless",
          "https://twitter.com/wmougayar",
          "https://twitter.com/TheStalwart",
          "https://twitter.com/Narodism",
          "https://twitter.com/_prestwich",
          "https://twitter.com/SwiftOnSecurity",
          "https://twitter.com/naomibrockwell",
          "https://twitter.com/WayneVaughan",
          "https://twitter.com/ryanxcharles",
          "https://twitter.com/BitfuryGeorge",
          "https://twitter.com/BitcoinErrorLog",
          "https://twitter.com/MartyBent",
          "https://twitter.com/soonaorlater",
          "https://twitter.com/StopAndDecrypt",
          "https://twitter.com/ziggamon",
          "https://twitter.com/Disruptepreneur",
          "https://twitter.com/coin_artist",
          "https://twitter.com/SarahJamieLewis",
          "https://twitter.com/benedictevans",
          "https://twitter.com/garrytan",
          "https://twitter.com/karl_dot_tech",
          "https://twitter.com/iang_fc",
          "https://twitter.com/murchandamus",
          "https://twitter.com/mdudas",
          "https://twitter.com/jinglanW",
          "https://twitter.com/jbrukh",
          "https://twitter.com/breitwoman",
          "https://twitter.com/angela_walch",
          "https://twitter.com/arcalinea",
          "https://twitter.com/stacyherbert",
          "https://twitter.com/officialmcafee",
          "https://twitter.com/DavidSacks",
          "https://twitter.com/Ethan_Heilman",
          "https://twitter.com/buchmanster",
          "https://twitter.com/albertwenger",
          "https://twitter.com/e_rossiello",
          "https://twitter.com/AndrewDARMACAP",
          "https://twitter.com/milessuter",
          "https://twitter.com/notgrubles",
          "https://twitter.com/dwr",
          "https://twitter.com/hrdng",
          "https://twitter.com/trentmc0",
          "https://twitter.com/satofishi",
          "https://twitter.com/theonevortex",
          "https://twitter.com/victoriavaneyk",
          "https://twitter.com/jessewldn",
          "https://twitter.com/santisiri",
          "https://twitter.com/AFDudley0",
          "https://twitter.com/BobSummerwill",
          "https://twitter.com/arrington",
          "https://twitter.com/MihaiAlisie",
          "https://twitter.com/rabois",
          "https://twitter.com/moneyball",
          "https://twitter.com/kristovatlas",
          "https://twitter.com/evan_van_ness",
          "https://twitter.com/marttimalmi",
          "https://twitter.com/CryptoCobain",
          "https://twitter.com/spencernoon",
          "https://twitter.com/dieguito",
          "https://twitter.com/PatrickByrne",
          "https://twitter.com/Steven_McKie",
          "https://twitter.com/GeorgeAHallam",
          "https://twitter.com/gendal",
          "https://twitter.com/MrHodl",
          "https://twitter.com/stephanlivera",
          "https://twitter.com/SunnyRayShow",
          "https://twitter.com/dakami",
          "https://twitter.com/wtogami",
          "https://twitter.com/lrettig",
          "https://twitter.com/dickerson_des",
          "https://twitter.com/alexisohanian",
          "https://twitter.com/dominic_w",
          "https://twitter.com/jchervinsky",
          "https://twitter.com/Technom4ge",
          "https://twitter.com/paddypisa",
          "https://twitter.com/benediktbuenz",
          "https://twitter.com/lawmaster",
          "https://twitter.com/jmonegro",
          "https://twitter.com/ChrisLundkvist",
          "https://twitter.com/stephantual",
          "https://twitter.com/JoelKatz",
          "https://twitter.com/jeremyrwelch",
          "https://twitter.com/ameensol",
          "https://twitter.com/100trillionUSD",
          "https://twitter.com/willwarren89",
          "https://twitter.com/pavolrusnak",
          "https://twitter.com/nopara73",
          "https://twitter.com/zhusu",
          "https://twitter.com/BashCo_",
          "https://twitter.com/jeffehh",
          "https://twitter.com/TonyGallippi",
          "https://twitter.com/feindura",
          "https://twitter.com/2drewlee",
          "https://twitter.com/timoncc",
          "https://twitter.com/alpacasw",
          "https://twitter.com/drwasho",
          "https://twitter.com/crainbf",
          "https://twitter.com/polemitis",
          "https://twitter.com/fintechfrank",
          "https://twitter.com/eladgil",
          "https://twitter.com/evacide",
          "https://twitter.com/BLR13",
          "https://twitter.com/LaurentMT",
          "https://twitter.com/hodlonaut",
          "https://twitter.com/delitzer",
          "https://twitter.com/licuende",
          "https://twitter.com/secparam",
          "https://twitter.com/derose",
          "https://twitter.com/james_hilliard",
          "https://twitter.com/zaoyang",
          "https://twitter.com/peter_szilagyi",
          "https://twitter.com/sytaylor",
          "https://twitter.com/Iiterature",
          "https://twitter.com/bramanathan",
          "https://twitter.com/robustus",
          "https://twitter.com/jeffreyatucker",
          "https://twitter.com/matt_levine",
          "https://twitter.com/ali01",
          "https://twitter.com/nicksdjohnson",
          "https://twitter.com/csuwildcat",
          "https://twitter.com/conniegallippi",
          "https://twitter.com/wiz",
          "https://twitter.com/tedmrogers",
          "https://twitter.com/real_or_random",
          "https://twitter.com/IamNomad",
          "https://twitter.com/JohnLilic",
          "https://twitter.com/ioptio",
          "https://twitter.com/danfinlay",
          "https://twitter.com/GamerAndy",
          "https://twitter.com/BKBrianKelly",
          "https://twitter.com/rzurrer",
          "https://twitter.com/Falkvinge",
          "https://twitter.com/olivierjanss",
          "https://twitter.com/CamiRusso",
          "https://twitter.com/MagicalTux",
          "https://twitter.com/mi_ayako",
          "https://twitter.com/Suitpossum",
          "https://twitter.com/masonic_tweets",
          "https://twitter.com/anguschampion",
          "https://twitter.com/paullinator",
          "https://twitter.com/theinstagibbs",
          "https://twitter.com/AnselLindner",
          "https://twitter.com/SHodyEsq",
          "https://twitter.com/bitconner",
          "https://twitter.com/tylercowen",
          "https://twitter.com/Catheryne_N",
          "https://twitter.com/waxwing__",
          "https://twitter.com/RaoulGMI",
          "https://twitter.com/mattblaze",
          "https://twitter.com/notsofast",
          "https://twitter.com/yaoeo",
          "https://twitter.com/haydentiff",
          "https://twitter.com/timpastoor",
          "https://twitter.com/jaesustein",
          "https://twitter.com/ChandlerGuo",
          "https://twitter.com/bgurley",
          "https://twitter.com/jp_koning",
          "https://twitter.com/moxie",
          "https://twitter.com/fundstrat",
          "https://twitter.com/juscamarena",
          "https://twitter.com/cryptomanran",
          "https://twitter.com/arbedout",
          "https://twitter.com/zackvoell",
          "https://twitter.com/deseventral",
          "https://twitter.com/sunnya97",
          "https://twitter.com/pbartstephens",
          "https://twitter.com/0xstark",
          "https://twitter.com/kevinrose",
          "https://twitter.com/nwoodfine",
          "https://twitter.com/JuanLlanos",
          "https://twitter.com/CarpeNoctom",
          "https://twitter.com/vessenes",
          "https://twitter.com/chrislarsensf",
          "https://twitter.com/inthepixels",
          "https://twitter.com/LefterisJP",
          "https://twitter.com/giancarloMKTS",
          "https://twitter.com/_tessr",
          "https://twitter.com/n1ckler",
          "https://twitter.com/Datavetaren",
          "https://twitter.com/etmccauley",
          "https://twitter.com/gakonst",
          "https://twitter.com/Radomysisky",
          "https://twitter.com/robinhanson",
          "https://twitter.com/dtapscott",
          "https://twitter.com/RyanSAdams",
          "https://twitter.com/keonne",
          "https://twitter.com/matthuang",
          "https://twitter.com/cryptocoley",
          "https://twitter.com/propelforward",
          "https://twitter.com/avichal",
          "https://twitter.com/PeterLBrandt",
          "https://twitter.com/backus",
          "https://twitter.com/a_greenberg",
          "https://twitter.com/haydenzadams",
          "https://twitter.com/bergealex4",
          "https://twitter.com/mhluongo",
          "https://twitter.com/TheScottRob",
          "https://twitter.com/TaylorGerring",
          "https://twitter.com/BitcoinBlake",
          "https://twitter.com/Beautyon_",
          "https://twitter.com/CobraBitcoin",
          "https://twitter.com/DavidVorick",
          "https://twitter.com/tonysheng",
          "https://twitter.com/parabolictrav",
          "https://twitter.com/RealRossU",
          "https://twitter.com/sthenc",
          "https://twitter.com/Ragnarly",
          "https://twitter.com/bascule",
          "https://twitter.com/jlppfeffer",
          "https://twitter.com/CReckhow",
          "https://twitter.com/BMBernstein",
          "https://twitter.com/austingriffith",
          "https://twitter.com/stefanobernardi",
          "https://twitter.com/justmoon",
          "https://twitter.com/hashbreaker",
          "https://twitter.com/no__________end",
          "https://twitter.com/QWQiao",
          "https://twitter.com/FelixWeis",
          "https://twitter.com/hugohanoi",
          "https://twitter.com/gelenbe",
          "https://twitter.com/jamesob",
          "https://twitter.com/srolondon",
          "https://twitter.com/mperklin",
          "https://twitter.com/danielcawrey",
          "https://twitter.com/MeherRoy",
          "https://twitter.com/BraveTheWorld",
          "https://twitter.com/calilyliu",
          "https://twitter.com/ChrJentzsch",
          "https://twitter.com/saleemrash1d",
          "https://twitter.com/least_nathan",
          "https://twitter.com/evoskuil",
          "https://twitter.com/Xentagz",
          "https://twitter.com/juliagalef",
          "https://twitter.com/izakaminska",
          "https://twitter.com/beller",
          "https://twitter.com/HesterPeirce",
          "https://twitter.com/bgarlinghouse",
          "https://twitter.com/timoreilly",
          "https://twitter.com/TusharJain_",
          "https://twitter.com/nickgrossman",
          "https://twitter.com/brianeklein",
          "https://twitter.com/WhiteAdamL",
          "https://twitter.com/kiarabickers",
          "https://twitter.com/abrkn",
          "https://twitter.com/brian_trollz",
          "https://twitter.com/josephbonneau",
          "https://twitter.com/AsherT",
          "https://twitter.com/SimonDixonTwitt",
          "https://twitter.com/byrongibson",
          "https://twitter.com/gorillamania",
          "https://twitter.com/Ryan_Singer",
          "https://twitter.com/BraytonKey",
          "https://twitter.com/michaelterpin",
          "https://twitter.com/shaolinfry",
          "https://twitter.com/thegrifft",
          "https://twitter.com/jmcorgan",
          "https://twitter.com/rivatez",
          "https://twitter.com/DJohnstonEC",
          "https://twitter.com/BrianForde",
          "https://twitter.com/gwern",
          "https://twitter.com/jon_choi_",
          "https://twitter.com/_charlienoyes",
          "https://twitter.com/eriktorenberg",
          "https://twitter.com/chris_belcher_",
          "https://twitter.com/bradmillscan",
          "https://twitter.com/AlyssaHertig",
          "https://twitter.com/a4fri",
          "https://twitter.com/gaborgurbacs",
          "https://twitter.com/melshapiro",
          "https://twitter.com/bfeld",
          "https://twitter.com/Willwaukee",
          "https://twitter.com/semil",
          "https://twitter.com/Austen",
          "https://twitter.com/J9Roem",
          "https://twitter.com/sassal0x",
          "https://twitter.com/awrigh01",
          "https://twitter.com/_drgo",
          "https://twitter.com/khannib",
          "https://twitter.com/desantis",
          "https://twitter.com/mwilcox",
          "https://twitter.com/RhysLindmark",
          "https://twitter.com/SamouraiDev",
          "https://twitter.com/patio11",
          "https://twitter.com/eordano",
          "https://twitter.com/kumavis_",
          "https://twitter.com/hosseeb",
          "https://twitter.com/kallewoof",
          "https://twitter.com/lucas_lclc",
          "https://twitter.com/drakefjustin",
          "https://twitter.com/glenweyl",
          "https://twitter.com/DeanEigenmann",
          "https://twitter.com/valeryvavilov",
          "https://twitter.com/EdFelten",
          "https://twitter.com/_JustinMoon_",
          "https://twitter.com/EpsilonTheory",
          "https://twitter.com/izqui9",
          "https://twitter.com/hernzzzzzz",
          "https://twitter.com/Bitfinexed",
          "https://twitter.com/PelleB",
          "https://twitter.com/DanielKrawisz",
          "https://twitter.com/queentatiana",
          "https://twitter.com/zeligf",
          "https://twitter.com/ethchris",
          "https://twitter.com/wuehler",
          "https://twitter.com/lwsnbaker",
          "https://twitter.com/virgilgr",
          "https://twitter.com/paul_btc",
          "https://twitter.com/Mandrik",
          "https://twitter.com/junseth",
          "https://twitter.com/EdanYago",
          "https://twitter.com/isislovecruft",
          "https://twitter.com/suhasdaftuar",
          "https://twitter.com/jarradhope",
          "https://twitter.com/_chjj",
          "https://twitter.com/JedMcCaleb",
          "https://twitter.com/ittayeyal",
          "https://twitter.com/alexsunnarborg",
          "https://twitter.com/mickymalka",
          "https://twitter.com/vkhosla",
          "https://twitter.com/mayazi",
          "https://twitter.com/BitCoinSusan",
          "https://twitter.com/jcliff42",
          "https://twitter.com/Travis_Kling",
          "https://twitter.com/justinwnewton",
          "https://twitter.com/Jim_Harper",
          "https://twitter.com/technocrypto",
          "https://twitter.com/mrauchs",
          "https://twitter.com/robertjcho",
          "https://twitter.com/dgwbirch",
          "https://twitter.com/justinkan",
          "https://twitter.com/econoar",
          "https://twitter.com/owocki",
          "https://twitter.com/SamuelPatt",
          "https://twitter.com/MarkYusko",
          "https://twitter.com/Satoshi_N_",
          "https://twitter.com/evabeylin",
          "https://twitter.com/ccatalini",
          "https://twitter.com/halfin",
          "https://twitter.com/alexanderfowler",
          "https://twitter.com/PeterRizun",
          "https://twitter.com/davidlee",
          "https://twitter.com/veradittakit",
          "https://twitter.com/CollinCrypto",
          "https://twitter.com/JeredKenna",
          "https://twitter.com/anjiecast",
          "https://twitter.com/ArthurFalls",
          "https://twitter.com/LightningK0ala",
          "https://twitter.com/DianacBiggs",
          "https://twitter.com/mikeinspace",
          "https://twitter.com/tensorjack",
          "https://twitter.com/JimBTC",
          "https://twitter.com/rootkovska",
          "https://twitter.com/mingchan88",
          "https://twitter.com/goldbe",
          "https://twitter.com/exiledsurfer",
          "https://twitter.com/lex_node",
          "https://twitter.com/CryptOrca",
          "https://twitter.com/grittygrease",
          "https://twitter.com/BitcoinByte",
          "https://twitter.com/js_horne",
          "https://twitter.com/jinyoungenglund",
          "https://twitter.com/Codiox",
          "https://twitter.com/alegw",
          "https://twitter.com/krugermacro",
          "https://twitter.com/StefanDGeorge",
          "https://twitter.com/ElaineRShi",
          "https://twitter.com/crypto_bobby",
          "https://twitter.com/MPtherealMVP",
          "https://twitter.com/jackfru1t",
          "https://twitter.com/cyounessi1",
          "https://twitter.com/southtopia",
          "https://twitter.com/EliBenSasson",
          "https://twitter.com/loomdart",
          "https://twitter.com/patrissimo",
          "https://twitter.com/AlokVasudev",
          "https://twitter.com/emiliemc",
          "https://twitter.com/octal",
          "https://twitter.com/sonyasupposedly",
          "https://twitter.com/HoumanShadab",
          "https://twitter.com/collision",
          "https://twitter.com/alextapscott",
          "https://twitter.com/shak",
          "https://twitter.com/slatestarcodex",
          "https://twitter.com/maurelian_",
          "https://twitter.com/devonzuegel",
          "https://twitter.com/S_Murphy_PhD",
          "https://twitter.com/odoudin",
          "https://twitter.com/Avivz78",
          "https://twitter.com/LeahWald",
          "https://twitter.com/romanitup",
          "https://twitter.com/AngeloBTC",
          "https://twitter.com/TaylorPearsonMe",
          "https://twitter.com/deadalnix",
          "https://twitter.com/BTChip",
          "https://twitter.com/midmagic",
          "https://twitter.com/ililic",
          "https://twitter.com/HillebrandMax",
          "https://twitter.com/LeoAW",
          "https://twitter.com/BlockGeekDima",
          "https://twitter.com/SomsenRuben",
          "https://twitter.com/provoost",
          "https://twitter.com/csoghoian",
          "https://twitter.com/liamihorne",
          "https://twitter.com/ArminVanBitcoin",
          "https://twitter.com/veorq",
          "https://twitter.com/FiloSottile",
          "https://twitter.com/RuneKek",
          "https://twitter.com/BitcoinRat",
          "https://twitter.com/ahcastor",
          "https://twitter.com/MyPaoG",
          "https://twitter.com/Sonnenshein",
          "https://twitter.com/carl_dong",
          "https://twitter.com/sinahab",
          "https://twitter.com/ChrisPacia",
          "https://twitter.com/btcking555",
          "https://twitter.com/helloluis",
          "https://twitter.com/leanthebean",
          "https://twitter.com/tom_ding",
          "https://twitter.com/DavidFBailey",
          "https://twitter.com/runasand",
          "https://twitter.com/bytemaster7",
          "https://twitter.com/RCasatta",
          "https://twitter.com/dawnmnewton",
          "https://twitter.com/jbaylina",
          "https://twitter.com/remyers_",
          "https://twitter.com/chjango",
          "https://twitter.com/jratcliff",
          "https://twitter.com/pt",
          "https://twitter.com/KonradSGraf",
          "https://twitter.com/taoeffect",
          "https://twitter.com/KLoaec",
          "https://twitter.com/loi_luu",
          "https://twitter.com/bbands",
          "https://twitter.com/BrianLockhart",
          "https://twitter.com/_Kevin_Pham",
          "https://twitter.com/TheCryptoDog",
          "https://twitter.com/MadarsV",
          "https://twitter.com/richardcraib",
          "https://twitter.com/_emschwartz",
          "https://twitter.com/compleatang",
          "https://twitter.com/flibbr",
          "https://twitter.com/verretor",
          "https://twitter.com/KatieAnanina",
          "https://twitter.com/MarcoFalke",
          "https://twitter.com/paigefreeman",
          "https://twitter.com/phneep",
          "https://twitter.com/jeremysliew",
          "https://twitter.com/NelsonMRosario",
          "https://twitter.com/TheRealKartik",
          "https://twitter.com/super3",
          "https://twitter.com/koqoo",
          "https://twitter.com/LucasNuzzi",
          "https://twitter.com/AsiffHirji",
          "https://twitter.com/annairrera",
          "https://twitter.com/HHorsley",
          "https://twitter.com/chiefyx",
          "https://twitter.com/derek_hsue",
          "https://twitter.com/shesek",
          "https://twitter.com/BullyEsq",
          "https://twitter.com/dandolfa",
          "https://twitter.com/vgr",
          "https://twitter.com/lisacheng",
          "https://twitter.com/MediumSqueeze",
          "https://twitter.com/jamie247",
          "https://twitter.com/BenLawsky",
          "https://twitter.com/OctSkyward",
          "https://twitter.com/MarshallHayner",
          "https://twitter.com/KiteVC",
          "https://twitter.com/JScigala",
          "https://twitter.com/jessepollak",
          "https://twitter.com/bitentrepreneur",
          "https://twitter.com/bitsmash",
          "https://twitter.com/theog__",
          "https://twitter.com/ESYudkowsky",
          "https://twitter.com/GabrielDVine",
          "https://twitter.com/PindarWong",
          "https://twitter.com/dannyryan",
          "https://twitter.com/CryptoHustle",
          "https://twitter.com/ActualAdviceBTC",
          "https://twitter.com/TamasBlummer",
          "https://twitter.com/BryceWeiner",
          "https://twitter.com/IanAllison123",
          "https://twitter.com/CTZN5",
          "https://twitter.com/harryhalpin",
          "https://twitter.com/NadavAHollander",
          "https://twitter.com/morgenpeck",
          "https://twitter.com/MeniRosenfeld",
          "https://twitter.com/michaelfolkson",
          "https://twitter.com/JaEsf",
          "https://twitter.com/cmoyall",
          "https://twitter.com/bmann",
          "https://twitter.com/aparnalocked",
          "https://twitter.com/HaileyLennonBTC",
          "https://twitter.com/CathieDWood",
          "https://twitter.com/michael_nielsen",
          "https://twitter.com/binarybits",
          "https://twitter.com/joyce",
          "https://twitter.com/timevalueofbtc",
          "https://twitter.com/panekkkk",
          "https://twitter.com/yassineARK",
          "https://twitter.com/bitcoinlady",
          "https://twitter.com/demibrener",
          "https://twitter.com/Mario_Gibney",
          "https://twitter.com/bitxbitxbitcoin",
          "https://twitter.com/robbiebent1",
          "https://twitter.com/CryptoBull",
          "https://twitter.com/melikmanukyan",
          "https://twitter.com/diogomonica",
          "https://twitter.com/Cryptopathic",
          "https://twitter.com/derekminter",
          "https://twitter.com/sarahtavel",
          "https://twitter.com/Leishman",
          "https://twitter.com/ianjohnlee",
          "https://twitter.com/IAmNickDodson",
          "https://twitter.com/clarkmoody",
          "https://twitter.com/renepickhardt",
          "https://twitter.com/Adam_Tache",
          "https://twitter.com/Gabridome",
          "https://twitter.com/willobrien",
          "https://twitter.com/embeddedfinance",
          "https://twitter.com/AriMNazir",
          "https://twitter.com/rsg",
          "https://twitter.com/interfluidity",
          "https://twitter.com/AnnaRRose",
          "https://twitter.com/Susan_Athey",
          "https://twitter.com/jalak",
          "https://twitter.com/vallywal",
          "https://twitter.com/dawnsongtweets",
          "https://twitter.com/BitcoinMemeHub",
          "https://twitter.com/realLedgerwatch",
          "https://twitter.com/mhswende",
          "https://twitter.com/kyledrake",
          "https://twitter.com/JamesGDAngelo",
          "https://twitter.com/rhhackett",
          "https://twitter.com/lsukernik",
          "https://twitter.com/dhruvbansal",
          "https://twitter.com/_JohnWhelan",
          "https://twitter.com/joshmh",
          "https://twitter.com/jimpo_potamus",
          "https://twitter.com/NoelleInMadrid",
          "https://twitter.com/smc90",
          "https://twitter.com/emilyspaven",
          "https://twitter.com/blythemasters",
          "https://twitter.com/asteroid_saku",
          "https://twitter.com/vakeraj",
          "https://twitter.com/josephzhou",
          "https://twitter.com/jemenger",
          "https://twitter.com/MihailoBjelic",
          "https://twitter.com/AshAEgan",
          "https://twitter.com/Y_deGaia",
          "https://twitter.com/bitcoinkatia",
          "https://twitter.com/antiprosynth",
          "https://twitter.com/AmandaCassatt",
          "https://twitter.com/mklords",
          "https://twitter.com/arampell",
          "https://twitter.com/jonwaller",
          "https://twitter.com/elidourado",
          "https://twitter.com/agl__",
          "https://twitter.com/brianbehlendorf",
          "https://twitter.com/JohnCollins",
          "https://twitter.com/thedanigrant",
          "https://twitter.com/adrian_brink",
          "https://twitter.com/ajtowns",
          "https://twitter.com/niraj",
          "https://twitter.com/musalbas",
          "https://twitter.com/SDWouters",
          "https://twitter.com/larrysalibra",
          "https://twitter.com/classygustav",
          "https://twitter.com/mattgcondon",
          "https://twitter.com/PhilCrypto77",
          "https://twitter.com/bedehomender",
          "https://twitter.com/TravisScher",
          "https://twitter.com/iurimatias",
          "https://twitter.com/nayafia",
          "https://twitter.com/dominiquefrnces",
          "https://twitter.com/rhian_is",
          "https://twitter.com/Chris_Stewart_5",
          "https://twitter.com/edmundedgar",
          "https://twitter.com/Itsjoeco",
          "https://twitter.com/fahmyeu",
          "https://twitter.com/yoniassia",
          "https://twitter.com/MichaelDunwort1",
          "https://twitter.com/alexadelman",
          "https://twitter.com/conniechan",
          "https://twitter.com/BlocktechCEO",
          "https://twitter.com/pirapira",
          "https://twitter.com/bencxr",
          "https://twitter.com/mmay3r",
          "https://twitter.com/KevinSimler",
          "https://twitter.com/crypto_dev_alex",
          "https://twitter.com/metaraine",
          "https://twitter.com/IvanBogatyy",
          "https://twitter.com/mids106",
          "https://twitter.com/patestevao",
          "https://twitter.com/JackGavigan",
          "https://twitter.com/johanth",
          "https://twitter.com/haseeb",
          "https://twitter.com/jeffscottward",
          "https://twitter.com/Ferdinando1970",
          "https://twitter.com/wintercooled",
          "https://twitter.com/tonilanec",
          "https://twitter.com/tikhon",
          "https://twitter.com/milenius",
          "https://twitter.com/harryyeh",
          "https://twitter.com/cgledhill",
          "https://twitter.com/SGBarbour",
          "https://twitter.com/chiselinc",
          "https://twitter.com/jmj",
          "https://twitter.com/jb55",
          "https://twitter.com/icebearhww",
          "https://twitter.com/jdietz",
          "https://twitter.com/yorkerhodes",
          "https://twitter.com/PatrickWStanley",
          "https://twitter.com/SamRadOfficial",
          "https://twitter.com/petkanics",
          "https://twitter.com/alice__LG",
          "https://twitter.com/scott_lew_is",
          "https://twitter.com/FredericJacobs",
          "https://twitter.com/BradUSV",
          "https://twitter.com/yanroux",
          "https://twitter.com/girevik_",
          "https://twitter.com/raulitojordan",
          "https://twitter.com/meeDamian",
          "https://twitter.com/mkomaransky",
          "https://twitter.com/FedericoTenga",
          "https://twitter.com/moneytrigz",
          "https://twitter.com/parkeralewis",
          "https://twitter.com/ferdousbhai",
          "https://twitter.com/hmichellerose",
          "https://twitter.com/bitcoinlawyer",
          "https://twitter.com/kwerb",
          "https://twitter.com/manfred_karrer",
          "https://twitter.com/frothcity",
          "https://twitter.com/fernandoulrich",
          "https://twitter.com/str4d",
          "https://twitter.com/EdmundCMoy",
          "https://twitter.com/DataTranslator",
          "https://twitter.com/MrSumfing",
          "https://twitter.com/StepanSnigirev",
          "https://twitter.com/bvu",
          "https://twitter.com/TheBTCGame",
          "https://twitter.com/C1aranMurray",
          "https://twitter.com/Stadicus3000",
          "https://twitter.com/MarkBeylin",
          "https://twitter.com/r0ckstardev",
          "https://twitter.com/jonhbit",
          "https://twitter.com/dstadulis",
          "https://twitter.com/pascalbouvier",
          "https://twitter.com/libovness",
          "https://twitter.com/antony_btc",
          "https://twitter.com/Marsmensch",
          "https://twitter.com/mBTCPizpie",
          "https://twitter.com/dksf",
          "https://twitter.com/sammantic",
          "https://twitter.com/BTCsessions",
          "https://twitter.com/stevennerayoff",
          "https://twitter.com/fredhrson",
          "https://twitter.com/wbobeirne",
          "https://twitter.com/JuanSGalt",
          "https://twitter.com/jemimajoanna",
          "https://twitter.com/kate_sills",
          "https://twitter.com/dguido",
          "https://twitter.com/max_bronstein",
          "https://twitter.com/22loops",
          "https://twitter.com/GarrickHileman",
          "https://twitter.com/LibertyBlitz",
          "https://twitter.com/mflaxman",
          "https://twitter.com/djkinkle",
          "https://twitter.com/antoniehodge",
          "https://twitter.com/intelliot",
          "https://twitter.com/micsolana",
          "https://twitter.com/MartinLundfall",
          "https://twitter.com/colingplatt",
          "https://twitter.com/flexthought",
          "https://twitter.com/jwolpert",
          "https://twitter.com/BrucePon",
          "https://twitter.com/keidunm",
          "https://twitter.com/bitcoin_dad",
          "https://twitter.com/djbooth007",
          "https://twitter.com/startupeddy",
          "https://twitter.com/janbraiins",
          "https://twitter.com/lkngtn",
          "https://twitter.com/dionyziz",
          "https://twitter.com/cyber_hokie",
          "https://twitter.com/mark_dago",
          "https://twitter.com/mattdlockyer",
          "https://twitter.com/cryptoSqueeze",
          "https://twitter.com/8bitgomes",
          "https://twitter.com/jamieCrypto",
          "https://twitter.com/PrestonPysh",
          "https://twitter.com/_Leviathn",
          "https://twitter.com/PeterSurda",
          "https://twitter.com/preston_vanloon",
          "https://twitter.com/BrendanBlumer",
          "https://twitter.com/lessin",
          "https://twitter.com/timothanke",
          "https://twitter.com/GDanezis",
          "https://twitter.com/alexberegszaszi",
          "https://twitter.com/kevinakwok",
          "https://twitter.com/JonathanMohan",
          "https://twitter.com/cryptowanderer",
          "https://twitter.com/winkelspecht",
          "https://twitter.com/hyperelliptic",
          "https://twitter.com/ThomasBertani",
          "https://twitter.com/ECorpCEO",
          "https://twitter.com/josephjpeters",
          "https://twitter.com/ketominer",
          "https://twitter.com/jennaszenk",
          "https://twitter.com/TheBitcoinWife",
          "https://twitter.com/mindspillage",
          "https://twitter.com/warpaul",
          "https://twitter.com/bobbyong",
          "https://twitter.com/TinaHui",
          "https://twitter.com/mattleising",
          "https://twitter.com/howardlindzon",
          "https://twitter.com/ATabarrok",
          "https://twitter.com/RNR_0",
          "https://twitter.com/tanayamac",
          "https://twitter.com/teemupai",
          "https://twitter.com/GoCoinSteve",
          "https://twitter.com/myles_snider",
          "https://twitter.com/hdevalence",
          "https://twitter.com/danielgross",
          "https://twitter.com/sharkybit",
          "https://twitter.com/pedrouid",
          "https://twitter.com/josephweinberg",
          "https://twitter.com/jdh",
          "https://twitter.com/cduhaime",
          "https://twitter.com/stile65",
          "https://twitter.com/bwertz",
          "https://twitter.com/ibrightly",
          "https://twitter.com/AlexisGauba",
          "https://twitter.com/hubert_btc",
          "https://twitter.com/josh_nussbaum",
          "https://twitter.com/CryptoYoda1338",
          "https://twitter.com/missbitcoin_mai",
          "https://twitter.com/ecurrencyhodler",
          "https://twitter.com/jfurgo",
          "https://twitter.com/MattCorva",
          "https://twitter.com/piamancini",
          "https://twitter.com/robep00",
          "https://twitter.com/Mona_El_Isa",
          "https://twitter.com/danboneh",
          "https://twitter.com/nikzh",
          "https://twitter.com/nicolagreco",
          "https://twitter.com/asliceofmellon",
          "https://twitter.com/miguelvias",
          "https://twitter.com/kylekemper",
          "https://twitter.com/TheCryptoconomy",
          "https://twitter.com/RichardHeartWin",
          "https://twitter.com/bitjson",
          "https://twitter.com/SeleneJin",
          "https://twitter.com/alexhevans",
          "https://twitter.com/nbougalis",
          "https://twitter.com/Coinosphere",
          "https://twitter.com/iamtexture",
          "https://twitter.com/takinbo",
          "https://twitter.com/bitcoinbella_",
          "https://twitter.com/6102bitcoin",
          "https://twitter.com/samcassatt",
          "https://twitter.com/maciejolpinski",
          "https://twitter.com/jeetsidhu_",
          "https://twitter.com/MarkFriedenbach",
          "https://twitter.com/zosegal",
          "https://twitter.com/Hotkatchina",
          "https://twitter.com/tek_fin",
          "https://twitter.com/BobMurphyEcon",
          "https://twitter.com/danielaperdomo",
          "https://twitter.com/gilluria",
          "https://twitter.com/Percival",
          "https://twitter.com/nanok",
          "https://twitter.com/kallerosenbaum",
          "https://twitter.com/mriou",
          "https://twitter.com/miketwenty1",
          "https://twitter.com/hodlornaut",
          "https://twitter.com/cryptodemedici",
          "https://twitter.com/OutlierCanada",
          "https://twitter.com/devilscompiler",
          "https://twitter.com/BenLaurie",
          "https://twitter.com/ThisIsNuse",
          "https://twitter.com/sserrano44",
          "https://twitter.com/bhec39",
          "https://twitter.com/jdrive",
          "https://twitter.com/tqbf",
          "https://twitter.com/RyanRadloff",
          "https://twitter.com/sweis",
          "https://twitter.com/Arjun_Bhuptani",
          "https://twitter.com/EvaKaili",
          "https://twitter.com/Coinsurenz",
          "https://twitter.com/weedcoder",
          "https://twitter.com/jaronlukas",
          "https://twitter.com/tomkysar",
          "https://twitter.com/malgorithms",
          "https://twitter.com/seb2point0",
          "https://twitter.com/ButtCoin",
          "https://twitter.com/mmeijeri",
          "https://twitter.com/maxtaco",
          "https://twitter.com/Dogetoshi",
          "https://twitter.com/readDanwrite",
          "https://twitter.com/sbmckeon",
          "https://twitter.com/leimer",
          "https://twitter.com/petejkim",
          "https://twitter.com/richiela",
          "https://twitter.com/ericturnr",
          "https://twitter.com/paulsnx2",
          "https://twitter.com/PulpSpy",
          "https://twitter.com/ponli137",
          "https://twitter.com/_kabessa",
          "https://twitter.com/paulmadsen"
        ],
        "labels": [],
        "listType": "static",
        "postType": "twitter",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "twitter:crypto",
        "preposition": "on",
        "re": "^((http:|https:)([/][/]))?(www.)?twitter.com/[^/]*[/]?$",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "twitter.com"
      },
      {
        "location": {
          "name": "twitter",
          "displayName": "Twitter"
        },
        "subject": {
          "name": "celebrities",
          "displayName": "celebrities"
        },
        "initialItems": [
          "https://twitter.com/BarackObama",
          "https://twitter.com/justinbieber",
          "https://twitter.com/katyperry",
          "https://twitter.com/rihanna",
          "https://twitter.com/taylorswift13",
          "https://twitter.com/Cristiano",
          "https://twitter.com/ladygaga",
          "https://twitter.com/TheEllenShow",
          "https://twitter.com/realDonaldTrump",
          "https://twitter.com/ArianaGrande",
          "https://twitter.com/YouTube",
          "https://twitter.com/jtimberlake",
          "https://twitter.com/KimKardashian",
          "https://twitter.com/selenagomez",
          "https://twitter.com/Twitter",
          "https://twitter.com/cnnbrk",
          "https://twitter.com/britneyspears",
          "https://twitter.com/narendramodi",
          "https://twitter.com/shakira",
          "https://twitter.com/jimmyfallon",
          "https://twitter.com/BillGates",
          "https://twitter.com/CNN",
          "https://twitter.com/neymarjr",
          "https://twitter.com/nytimes",
          "https://twitter.com/KingJames",
          "https://twitter.com/JLo",
          "https://twitter.com/MileyCyrus",
          "https://twitter.com/BrunoMars",
          "https://twitter.com/Oprah",
          "https://twitter.com/BBCBreaking",
          "https://twitter.com/SrBachchan",
          "https://twitter.com/iamsrk",
          "https://twitter.com/BeingSalmanKhan",
          "https://twitter.com/NiallOfficial",
          "https://twitter.com/Drake",
          "https://twitter.com/SportsCenter",
          "https://twitter.com/KevinHart4real",
          "https://twitter.com/wizkhalifa",
          "https://twitter.com/NASA",
          "https://twitter.com/instagram",
          "https://twitter.com/espn",
          "https://twitter.com/LilTunechi",
          "https://twitter.com/akshaykumar",
          "https://twitter.com/imVkohli",
          "https://twitter.com/Harry_Styles",
          "https://twitter.com/realmadrid",
          "https://twitter.com/Louis_Tomlinson",
          "https://twitter.com/PMOIndia",
          "https://twitter.com/LiamPayne",
          "https://twitter.com/elonmusk",
          "https://twitter.com/FCBarcelona",
          "https://twitter.com/KylieJenner",
          "https://twitter.com/Pink",
          "https://twitter.com/sachin_rt",
          "https://twitter.com/chrisbrown",
          "https://twitter.com/onedirection",
          "https://twitter.com/NBA",
          "https://twitter.com/aliciakeys",
          "https://twitter.com/KAKA",
          "https://twitter.com/kanyewest",
          "https://twitter.com/EmmaWatson",
          "https://twitter.com/KendallJenner",
          "https://twitter.com/POTUS",
          "https://twitter.com/ConanOBrien",
          "https://twitter.com/zaynmalik",
          "https://twitter.com/khloekardashian",
          "https://twitter.com/ChampionsLeague",
          "https://twitter.com/iHrithik",
          "https://twitter.com/BBCWorld",
          "https://twitter.com/Adele",
          "https://twitter.com/HillaryClinton",
          "https://twitter.com/deepikapadukone",
          "https://twitter.com/ActuallyNPH",
          "https://twitter.com/pitbull",
          "https://twitter.com/priyankachopra",
          "https://twitter.com/danieltosh",
          "https://twitter.com/aamir_khan",
          "https://twitter.com/NFL",
          "https://twitter.com/ShawnMendes",
          "https://twitter.com/kourtneykardash",
          "https://twitter.com/MesutOzil1088",
          "https://twitter.com/andresiniesta8",
          "https://twitter.com/BTS_twt",
          "https://twitter.com/TheEconomist",
          "https://twitter.com/NatGeo",
          "https://twitter.com/coldplay",
          "https://twitter.com/Eminem",
          "https://twitter.com/arrahman",
          "https://twitter.com/Google",
          "https://twitter.com/premierleague",
          "https://twitter.com/Reuters",
          "https://twitter.com/MariahCarey",
          "https://twitter.com/ManUtd",
          "https://twitter.com/AvrilLavigne",
          "https://twitter.com/davidguetta",
          "https://twitter.com/WhiteHouse",
          "https://twitter.com/AnushkaSharma",
          "https://twitter.com/NICKIMINAJ",
          "https://twitter.com/blakeshelton",
          "https://twitter.com/ricky_martin",
          "https://twitter.com/virendersehwag",
          "https://twitter.com/aliaa08",
          "https://twitter.com/MohamadAlarefe",
          "https://twitter.com/AlejandroSanz",
          "https://twitter.com/3gerardpique",
          "https://twitter.com/ddlovato",
          "https://twitter.com/bts_bighit",
          "https://twitter.com/Dr_alqarnee",
          "https://twitter.com/LeoDiCaprio",
          "https://twitter.com/pewdiepie",
          "https://twitter.com/DalaiLama",
          "https://twitter.com/10Ronaldinho",
          "https://twitter.com/AlArabiya_Brk",
          "https://twitter.com/StephenAtHome",
          "https://twitter.com/edsheeran",
          "https://twitter.com/FoxNews",
          "https://twitter.com/JimCarrey",
          "https://twitter.com/jamesdrodriguez",
          "https://twitter.com/SnoopDogg",
          "https://twitter.com/CNNEE",
          "https://twitter.com/GarethBale11",
          "https://twitter.com/KDTrey5",
          "https://twitter.com/AmitShah",
          "https://twitter.com/Pontifex",
          "https://twitter.com/shugairi",
          "https://twitter.com/PlayStation",
          "https://twitter.com/aplusk",
          "https://twitter.com/agnezmo",
          "https://twitter.com/Pontifex_es",
          "https://twitter.com/WSJ",
          "https://twitter.com/FALCAO",
          "https://twitter.com/ArvindKejriwal",
          "https://twitter.com/DaniloGentili",
          "https://twitter.com/ImRaina",
          "https://twitter.com/Zendaya",
          "https://twitter.com/WayneRooney",
          "https://twitter.com/xtina",
          "https://twitter.com/ParisHilton",
          "https://twitter.com/karanjohar",
          "https://twitter.com/SergioRamos",
          "https://twitter.com/TIME",
          "https://twitter.com/ivetesangalo",
          "https://twitter.com/tomhanks",
          "https://twitter.com/9GAG",
          "https://twitter.com/ImRo45",
          "https://twitter.com/LuisSuarez9",
          "https://twitter.com/rajnathsingh",
          "https://twitter.com/ZacEfron",
          "https://twitter.com/Forbes",
          "https://twitter.com/camerondallas",
          "https://twitter.com/MTV",
          "https://twitter.com/detikcom",
          "https://twitter.com/radityadika",
          "https://twitter.com/RyanSeacrest",
          "https://twitter.com/Arsenal",
          "https://twitter.com/RafaelNadal",
          "https://twitter.com/VancityReynolds",
          "https://twitter.com/Diddy",
          "https://twitter.com/kobebryant",
          "https://twitter.com/paulocoelho",
          "https://twitter.com/Beyonce",
          "https://twitter.com/AnupamPKher",
          "https://twitter.com/sonakshisinha",
          "https://twitter.com/SHAQ",
          "https://twitter.com/RTErdogan",
          "https://twitter.com/washingtonpost",
          "https://twitter.com/ABC",
          "https://twitter.com/arunjaitley",
          "https://twitter.com/TwitterSports",
          "https://twitter.com/FCBarcelona_es",
          "https://twitter.com/KapilSharmaK9",
          "https://twitter.com/POTUS44",
          "https://twitter.com/juniorbachchan",
          "https://twitter.com/TwitterLatAm",
          "https://twitter.com/TwitterVideo",
          "https://twitter.com/whindersson",
          "https://twitter.com/shahidkapoor",
          "https://twitter.com/AJArabic",
          "https://twitter.com/RobertDowneyJr",
          "https://twitter.com/maroon5",
          "https://twitter.com/MichelleObama",
          "https://twitter.com/nickjonas",
          "https://twitter.com/BigSean",
          "https://twitter.com/jk_rowling",
          "https://twitter.com/CMYLMZ",
          "https://twitter.com/ClaudiaLeitte",
          "https://twitter.com/elissakh",
          "https://twitter.com/tyrabanks",
          "https://twitter.com/NancyAjram",
          "https://twitter.com/TheRock",
          "https://twitter.com/Alafasy",
          "https://twitter.com/rickygervais",
          "https://twitter.com/LFC",
          "https://twitter.com/Asli_Jacqueline",
          "https://twitter.com/StephenCurry30",
          "https://twitter.com/SethMacFarlane",
          "https://twitter.com/enriqueiglesias",
          "https://twitter.com/ChelseaFC",
          "https://twitter.com/RealHughJackman",
          "https://twitter.com/AlArabiya",
          "https://twitter.com/mangeshkarlata",
          "https://twitter.com/CGTNOfficial",
          "https://twitter.com/TreySongz",
          "https://twitter.com/Rubiu5",
          "https://twitter.com/UberFacts",
          "https://twitter.com/AP",
          "https://twitter.com/Xbox",
          "https://twitter.com/VineCreators",
          "https://twitter.com/voguemagazine",
          "https://twitter.com/neiltyson",
          "https://twitter.com/funnyordie",
          "https://twitter.com/ChrisEvans",
          "https://twitter.com/FLOTUS",
          "https://twitter.com/ParineetiChopra",
          "https://twitter.com/JColeNC",
          "https://twitter.com/Facebook",
          "https://twitter.com/aguerosergiokun",
          "https://twitter.com/johnlegend",
          "https://twitter.com/RanveerOfficial",
          "https://twitter.com/marcosmion",
          "https://twitter.com/vicegandako",
          "https://twitter.com/FIFAcom",
          "https://twitter.com/salman_alodah",
          "https://twitter.com/CHANEL",
          "https://twitter.com/BigHitEnt",
          "https://twitter.com/jokowi",
          "https://twitter.com/SushmaSwaraj",
          "https://twitter.com/sabqorg",
          "https://twitter.com/ObamaWhiteHouse",
          "https://twitter.com/daddy_yankee",
          "https://twitter.com/ashleytisdale",
          "https://twitter.com/BJP4India",
          "https://twitter.com/sonamakapoor",
          "https://twitter.com/LucianoHuck",
          "https://twitter.com/TweetRAMALAN",
          "https://twitter.com/UberSoc",
          "https://twitter.com/annecurtissmith",
          "https://twitter.com/stephenfry",
          "https://twitter.com/rogerfederer",
          "https://twitter.com/richardbranson",
          "https://twitter.com/chetan_bhagat",
          "https://twitter.com/iamwill",
          "https://twitter.com/XHNews",
          "https://twitter.com/5SOS",
          "https://twitter.com/RahulGandhi",
          "https://twitter.com/D_DeGea",
          "https://twitter.com/SarahKSilverman",
          "https://twitter.com/CalvinHarris",
          "https://twitter.com/markiplier",
          "https://twitter.com/chrissyteigen",
          "https://twitter.com/victoriabeckham",
          "https://twitter.com/timesofindia",
          "https://twitter.com/halsey",
          "https://twitter.com/ajaydevgn",
          "https://twitter.com/SaudiNews50",
          "https://twitter.com/kellyclarkson",
          "https://twitter.com/FarOutAkhtar",
          "https://twitter.com/ndtv",
          "https://twitter.com/ShraddhaKapoor",
          "https://twitter.com/ZoeSugg",
          "https://twitter.com/Usher",
          "https://twitter.com/JohnCena",
          "https://twitter.com/thekiranbedi",
          "https://twitter.com/RedeGlobo",
          "https://twitter.com/UN",
          "https://twitter.com/SamsungMobile",
          "https://twitter.com/TwitterMusic",
          "https://twitter.com/kendricklamar",
          "https://twitter.com/XabiAlonso",
          "https://twitter.com/mindykaling",
          "https://twitter.com/LittleMix",
          "https://twitter.com/MarceloM12",
          "https://twitter.com/enews",
          "https://twitter.com/LunaMaya26",
          "https://twitter.com/143redangel",
          "https://twitter.com/cinema21",
          "https://twitter.com/jimmykimmel",
          "https://twitter.com/Carles5puyol",
          "https://twitter.com/tim_cook",
          "https://twitter.com/MoSalah",
          "https://twitter.com/juanes",
          "https://twitter.com/BillClinton",
          "https://twitter.com/rafinhabastos",
          "https://twitter.com/GermanGarmendia",
          "https://twitter.com/Pixar",
          "https://twitter.com/50cent",
          "https://twitter.com/BernieSanders",
          "https://twitter.com/SimonCowell",
          "https://twitter.com/rustyrockets",
          "https://twitter.com/Ludacris",
          "https://twitter.com/theweeknd",
          "https://twitter.com/HuffPost",
          "https://twitter.com/TheOnion",
          "https://twitter.com/Tatawerneck",
          "https://twitter.com/TEDTalks",
          "https://twitter.com/cnnarabic",
          "https://twitter.com/ciara",
          "https://twitter.com/MarcAnthony",
          "https://twitter.com/realmadriden",
          "https://twitter.com/programapanico",
          "https://twitter.com/ImranKhanPTI",
          "https://twitter.com/Starbucks",
          "https://twitter.com/Varun_dvn",
          "https://twitter.com/kata2bijak",
          "https://twitter.com/PaulinaRubio",
          "https://twitter.com/charliesheen",
          "https://twitter.com/NabilAlawadhy",
          "https://twitter.com/yuyacst",
          "https://twitter.com/Alwaleed_Talal",
          "https://twitter.com/SabrinaSato",
          "https://twitter.com/VictoriasSecret",
          "https://twitter.com/billmaher",
          "https://twitter.com/BCCI",
          "https://twitter.com/Camila_Cabello",
          "https://twitter.com/yadavakhilesh",
          "https://twitter.com/felipeneto",
          "https://twitter.com/g1",
          "https://twitter.com/Pharrell",
          "https://twitter.com/Byoussef",
          "https://twitter.com/WWE",
          "https://twitter.com/serenawilliams",
          "https://twitter.com/gusttavo_lima",
          "https://twitter.com/KrisJenner",
          "https://twitter.com/sherinasinna",
          "https://twitter.com/amrkhaled",
          "https://twitter.com/Benzema",
          "https://twitter.com/iamcardib",
          "https://twitter.com/JKCorden",
          "https://twitter.com/BBCNews",
          "https://twitter.com/ICC",
          "https://twitter.com/rioferdy5",
          "https://twitter.com/azizansari",
          "https://twitter.com/luansantana",
          "https://twitter.com/smritiirani",
          "https://twitter.com/EugenioDerbez",
          "https://twitter.com/Metro_TV",
          "https://twitter.com/Ricardo_Arjona",
          "https://twitter.com/Android",
          "https://twitter.com/NintendoAmerica",
          "https://twitter.com/Luke5SOS",
          "https://twitter.com/harbhajan_singh",
          "https://twitter.com/amrdiab",
          "https://twitter.com/WIRED",
          "https://twitter.com/Trevornoah",
          "https://twitter.com/RockstarGames",
          "https://twitter.com/QueenRania",
          "https://twitter.com/Anitta",
          "https://twitter.com/VictoriaJustice",
          "https://twitter.com/Michael5SOS",
          "https://twitter.com/joejonas",
          "https://twitter.com/GautamGambhir",
          "https://twitter.com/cuervotinelli",
          "https://twitter.com/Riteishd",
          "https://twitter.com/CuteEmergency",
          "https://twitter.com/realwbonner",
          "https://twitter.com/TechCrunch",
          "https://twitter.com/carlyraejepsen",
          "https://twitter.com/SBYudhoyono",
          "https://twitter.com/bernardokath",
          "https://twitter.com/showdavida",
          "https://twitter.com/HHShkMohd",
          "https://twitter.com/davidbisbal",
          "https://twitter.com/cnni",
          "https://twitter.com/FortniteGame",
          "https://twitter.com/cesc4official",
          "https://twitter.com/andersoncooper",
          "https://twitter.com/SpaceX",
          "https://twitter.com/maddow",
          "https://twitter.com/Caradelevingne",
          "https://twitter.com/afgansyah_reza",
          "https://twitter.com/colesprouse",
          "https://twitter.com/TareqAlSuwaidan",
          "https://twitter.com/girlposts",
          "https://twitter.com/shanedawson",
          "https://twitter.com/Anahi",
          "https://twitter.com/ashwinravi99",
          "https://twitter.com/HashKSA",
          "https://twitter.com/mashable",
          "https://twitter.com/LanaDelRey",
          "https://twitter.com/AppleMusic",
          "https://twitter.com/thalia",
          "https://twitter.com/LukeBryanOnline",
          "https://twitter.com/LuisFonsi",
          "https://twitter.com/AustinMahone",
          "https://twitter.com/TwitterLive",
          "https://twitter.com/MeekMill",
          "https://twitter.com/MarceloTas",
          "https://twitter.com/BreakingNews",
          "https://twitter.com/JoelOsteen",
          "https://twitter.com/SenSanders",
          "https://twitter.com/Persie_Official",
          "https://twitter.com/TwitterTV",
          "https://twitter.com/SidMalhotra",
          "https://twitter.com/connorfranta",
          "https://twitter.com/TimesNow",
          "https://twitter.com/troyesivan",
          "https://twitter.com/CHAYANNEMUSIC",
          "https://twitter.com/GalatasaraySK",
          "https://twitter.com/GiGiHadid",
          "https://twitter.com/ABPNews",
          "https://twitter.com/marcoluque",
          "https://twitter.com/aajtak",
          "https://twitter.com/Marvel",
          "https://twitter.com/MirzaSania",
          "https://twitter.com/urstrulyMahesh",
          "https://twitter.com/Legendarios",
          "https://twitter.com/carmeloanthony",
          "https://twitter.com/jessicaalba",
          "https://twitter.com/marioteguh",
          "https://twitter.com/montanertwiter",
          "https://twitter.com/IkerCasillas",
          "https://twitter.com/Guaje7Villa",
          "https://twitter.com/CH14_",
          "https://twitter.com/dhanushkraja",
          "https://twitter.com/Alhilal_FC",
          "https://twitter.com/DaniAlvesD2",
          "https://twitter.com/AhlamAlShamsi",
          "https://twitter.com/marcjacobs",
          "https://twitter.com/Tip",
          "https://twitter.com/DwyaneWade",
          "https://twitter.com/sardesairajdeep",
          "https://twitter.com/SofiaVergara",
          "https://twitter.com/Microsoft",
          "https://twitter.com/DavidLuiz_4",
          "https://twitter.com/MartinGarrix",
          "https://twitter.com/MadhuriDixit",
          "https://twitter.com/realmadridarab",
          "https://twitter.com/NewYorker",
          "https://twitter.com/IBGDRGN",
          "https://twitter.com/Lakers",
          "https://twitter.com/France24_ar",
          "https://twitter.com/tvOneNews",
          "https://twitter.com/Pitty",
          "https://twitter.com/DjokerNole",
          "https://twitter.com/VP",
          "https://twitter.com/dog_rates",
          "https://twitter.com/basuki_btp",
          "https://twitter.com/lemondefr",
          "https://twitter.com/raisa6690",
          "https://twitter.com/pepatah",
          "https://twitter.com/LuceroMexico",
          "https://twitter.com/NetflixBrasil",
          "https://twitter.com/MariaSharapova",
          "https://twitter.com/lindsaylohan",
          "https://twitter.com/youm7",
          "https://twitter.com/Swamy39",
          "https://twitter.com/vidialdiano",
          "https://twitter.com/RaffiAhmadLagi",
          "https://twitter.com/SteveMartinToGo",
          "https://twitter.com/NoticiasCaracol",
          "https://twitter.com/MLB",
          "https://twitter.com/JessieJ",
          "https://twitter.com/Discovery",
          "https://twitter.com/FabioPorchat",
          "https://twitter.com/guardian",
          "https://twitter.com/tylerthecreator",
          "https://twitter.com/AristeguiOnline",
          "https://twitter.com/cbabdullahgul",
          "https://twitter.com/adamlevine",
          "https://twitter.com/billboard",
          "https://twitter.com/MonsieurDream",
          "https://twitter.com/imdanielpadilla",
          "https://twitter.com/Earth_Pics",
          "https://twitter.com/MustafaHosny",
          "https://twitter.com/GraysonDolan",
          "https://twitter.com/NSaina",
          "https://twitter.com/MacMiller",
          "https://twitter.com/GameOfThrones",
          "https://twitter.com/BleacherReport",
          "https://twitter.com/bhogleharsha",
          "https://twitter.com/TheDailyShow",
          "https://twitter.com/carrieunderwood",
          "https://twitter.com/muyinteresante",
          "https://twitter.com/VEJA",
          "https://twitter.com/werevertumorro",
          "https://twitter.com/steveaoki",
          "https://twitter.com/Burberry",
          "https://twitter.com/hm",
          "https://twitter.com/BBCSport",
          "https://twitter.com/Sethrogen",
          "https://twitter.com/gucci1017",
          "https://twitter.com/EthanDolan",
          "https://twitter.com/channingtatum",
          "https://twitter.com/chancetherapper",
          "https://twitter.com/SamuelLJackson",
          "https://twitter.com/CarlosLoret",
          "https://twitter.com/TheWeirdWorld",
          "https://twitter.com/samsmith",
          "https://twitter.com/danielhowell",
          "https://twitter.com/IvankaTrump",
          "https://twitter.com/rashtrapatibhvn",
          "https://twitter.com/chelseahandler",
          "https://twitter.com/Mascherano",
          "https://twitter.com/najwakaram",
          "https://twitter.com/Nike",
          "https://twitter.com/Dior",
          "https://twitter.com/SMTOWNGLOBAL",
          "https://twitter.com/NPR",
          "https://twitter.com/UNICEF",
          "https://twitter.com/ToniKroos",
          "https://twitter.com/"
        ],
        "labels": [],
        "listType": "static",
        "postType": "twitter",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "twitter:celebrities",
        "preposition": "on",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ],
        "tag": "twitter.com"
      },
      {
        "location": {
          "name": "twitter",
          "displayName": "Twitter"
        },
        "subject": {
          "name": "epidemiologists",
          "displayName": "epidemiologists"
        },
        "initialItems": [
          "https://twitter.com/mlipsitch",
          "https://twitter.com/JeremyFarrar",
          "https://twitter.com/arambaut",
          "https://twitter.com/ChristoPhraser",
          "https://twitter.com/AdamJKucharski",
          "https://twitter.com/HelenBranswell",
          "https://twitter.com/trvrb",
          "https://twitter.com/MRC_Outbreak",
          "https://twitter.com/SRileyIDD",
          "https://twitter.com/JustinLessler",
          "https://twitter.com/cmyeaton",
          "https://twitter.com/neil_ferguson",
          "https://twitter.com/simonihay",
          "https://twitter.com/MackayIM",
          "https://twitter.com/WHO",
          "https://twitter.com/MarionKoopmans",
          "https://twitter.com/TAlexPerkins",
          "https://twitter.com/TheFerrariLab",
          "https://twitter.com/alexvespi",
          "https://twitter.com/rozeggo",
          "https://twitter.com/petrakle",
          "https://twitter.com/Imperial_IDE",
          "https://twitter.com/betzhallo",
          "https://twitter.com/CIDIDteam",
          "https://twitter.com/CCDD_HSPH",
          "https://twitter.com/CEPIvaccines",
          "https://twitter.com/sdwfrost",
          "https://twitter.com/DeirdreHoll",
          "https://twitter.com/IDEpiPhD",
          "https://twitter.com/sarahcobey",
          "https://twitter.com/cmmid_lshtm",
          "https://twitter.com/sbfnk",
          "https://twitter.com/bansallab",
          "https://twitter.com/jennifergardy",
          "https://twitter.com/SCauchemez",
          "https://twitter.com/IDDjobs",
          "https://twitter.com/SACEMAdirector",
          "https://twitter.com/edwardcholmes",
          "https://twitter.com/johnbrownstein",
          "https://twitter.com/AnisabelBento",
          "https://twitter.com/healthmap",
          "https://twitter.com/CIDRAP",
          "https://twitter.com/datcummings",
          "https://twitter.com/MOUGK",
          "https://twitter.com/jd_mathbio",
          "https://twitter.com/wellcometrust",
          "https://twitter.com/TeebzR",
          "https://twitter.com/jw132",
          "https://twitter.com/MarcBaguelin",
          "https://twitter.com/BillHanage",
          "https://twitter.com/mvankerkhove",
          "https://twitter.com/isabelrodbar",
          "https://twitter.com/OWMorgan",
          "https://twitter.com/SCBriand",
          "https://twitter.com/kakape",
          "https://twitter.com/TheLancet",
          "https://twitter.com/DrTedros",
          "https://twitter.com/C_Althaus",
          "https://twitter.com/StfnFlsch",
          "https://twitter.com/EvolveDotZoo",
          "https://twitter.com/CJEMetcalf",
          "https://twitter.com/AndyTatem",
          "https://twitter.com/aetiology",
          "https://twitter.com/azraghani",
          "https://twitter.com/gmleunghku",
          "https://twitter.com/martinenserink",
          "https://twitter.com/kathmoreilly",
          "https://twitter.com/hannahhec",
          "https://twitter.com/marcelsalathe",
          "https://twitter.com/onisillos",
          "https://twitter.com/RECONEPI",
          "https://twitter.com/gatesfoundation",
          "https://twitter.com/reichlab",
          "https://twitter.com/majohanss",
          "https://twitter.com/Caroline_OF_B",
          "https://twitter.com/Laurie_Garrett",
          "https://twitter.com/dr_anne_cori",
          "https://twitter.com/LSHTM",
          "https://twitter.com/BjornstadOttar",
          "https://twitter.com/ScienceMagazine",
          "https://twitter.com/maiamajumder",
          "https://twitter.com/richardhorton1",
          "https://twitter.com/BillGates",
          "https://twitter.com/VaccineEpi",
          "https://twitter.com/CDCDirector",
          "https://twitter.com/drake_lab",
          "https://twitter.com/JHIDDynamics",
          "https://twitter.com/EEID_oxford",
          "https://twitter.com/GrahamMedley",
          "https://twitter.com/pathogenomenick",
          "https://twitter.com/dylanbgeorge",
          "https://twitter.com/svscarpino",
          "https://twitter.com/michaelmina_lab",
          "https://twitter.com/colinrussell",
          "https://twitter.com/Chikwe_I",
          "https://twitter.com/bugwonk",
          "https://twitter.com/TheLancetInfDis",
          "https://twitter.com/T_Inglesby",
          "https://twitter.com/PeterHotez",
          "https://twitter.com/ECDC_EU"
        ],
        "labels": [],
        "listType": "static",
        "postType": "twitter",
        "searchEnabled": true,
        "displayPriority": 0,
        "_id": "twitter:epidemiologists",
        "preposition": "on",
        "categories": [{
            "name": "overall",
            "displayName": "top"
          },
          {
            "name": "popularity",
            "displayName": "most liked"
          },
          {
            "name": "intelligence",
            "displayName": "smartest"
          },
          {
            "name": "funny",
            "displayName": "funniest"
          }
        ]
      }
    ]
  ```

### Notifications

Method:

`GET`

Endpoint:

`/notifications/{username}`

Usage:

Fetch notifications for a particular Yup user.

Example:

* [http://api.yup.io/notifications/darrenyupxxx](http://api.yup.io/notifications/darrenyupxxx)

  ```javascript
    [{
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81487"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=nZ_lYVp9TMg",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158244000",
        "rating": {
          "popularity": {
            "ratingAvg": 2,
            "ratingCount": 1,
            "ratingSum": 2
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 2,
            "ratingCount": 1,
            "ratingSum": 2
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603158244000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/nZ_lYVp9TMg/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=nZ_lYVp9TMg",
          "title": "I bought the cheapest \"Gaming\" pre-built PC from Best Buy",
          "description": "#bestbuy #prebuilt #doesanyonestill# I bought the cheapest \"gaming\" branded pre-built from Best Buy to see if it's any good. It's not the worst thing ever, b..."
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81486"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?reload=9&v=EDE3ZXBeMdo",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158244000",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603158244000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/EDE3ZXBeMdo/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?reload=9&v=EDE3ZXBeMdo",
          "title": "How Many Gallons of Soup Does a Washer Machine Cook?",
          "description": "The first 1000 people to use this link will get a free trial of Skillshare Premium Membership: https://skl.sh/thekingofrandom09201 Today we finally make soup..."
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81485"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/crystalrose/status/1318289595583397890",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158088500",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "twitter.com",
        "timestamp": "1603158088500",
        "videoHash": "",
        "previewData": {
          "img": "https://pbs.twimg.com/media/EkuBZZeXgAAiZ27.jpg:large",
          "url": "https://twitter.com/crystalrose/status/1318289595583397890",
          "title": "Crystal Rose ⚡️ on Twitter",
          "description": "“Mining #crypto while chatting ⚡️💬 \nMy earning rate just went up to 9.3 $SENSE per hour on @SenseChat”"
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81484"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://twitter.com/EOS42io/status/1318297358526947328",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603158082500",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "twitter.com",
        "timestamp": "1603158082500",
        "videoHash": "",
        "previewData": {
          "img": "https://pbs.twimg.com/card_img/1318273799893209088/xQgy81ZM?format=jpg&name=600x314",
          "url": "https://twitter.com/EOS42io/status/1318297358526947328",
          "title": "EOS42 on Twitter",
          "description": "“Liquidapps product suite is now interoperable. #EOS can cross leverage liquidity while other protocols can access scaling solutions they desperately need. \n@LiquidAppsIO \n\nhttps://t.co/Vsx49K2DKW”"
        }
      },
      {
        "weights": {
          "overall": 20,
          "popularity": 20,
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
        "avatar": "",
        "quantiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
        "sextiles": {
          "overall": "fourth",
          "popularity": "fourth",
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
          "postid": "81483"
        },
        "__v": 0,
        "author": "yupcreators1",
        "caption": "https://youtube.com/watch?v=iy_1r0kEBeg",
        "catVotes": {
          "popularity": {
            "up": 1,
            "down": 0
          },
          "intelligence": {
            "up": 0,
            "down": 0
          },
          "funny": {
            "up": 0,
            "down": 0
          },
          "overall": {
            "up": 1,
            "down": 0
          }
        },
        "imgHash": "",
        "lastUpdated": "1603154466000",
        "rating": {
          "popularity": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          },
          "intelligence": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "funny": {
            "ratingAvg": 0,
            "ratingCount": 0,
            "ratingSum": 0
          },
          "overall": {
            "ratingAvg": 1,
            "ratingCount": 1,
            "ratingSum": 1
          }
        },
        "tag": "youtube.com",
        "timestamp": "1603154466000",
        "videoHash": "",
        "previewData": {
          "img": "https://i.ytimg.com/vi/iy_1r0kEBeg/maxresdefault.jpg",
          "url": "https://www.youtube.com/watch?v=iy_1r0kEBeg",
          "title": "SMTM9 [SUB ESP] - D.Ark - Life",
          "description": "👉🏻📱 Facebook con KHH: https://www.facebook.com/smtmlatino 👉🏻📱 Pagina de gameplays: https://www.facebook.com/iverkhh 👉🏻📱 Instagram: https://www.instagram.com/..."
        }
      }
    ]
  ```

### Search

Method:

`GET`

Endpoint:

`/search/{params}`

Usage:

Search through Yup posts by given params. As used on Lists page.

Params:

`searchText, limit, list, category`

Example:

* [http://api.yup.io/search](http://api.yup.io/search)

  ```javascript
    {
        "msg": "Invalid value",
        "param": "searchText",
        "location": "query"
    },
    {
        "msg": "Invalid value",
        "param": "list",
        "location": "query"
    },
    {
        "msg": "Invalid value",
        "param": "category",
        "location": "query"
    }
  ```

[http://api.yup.io/search?searchText=superrare&category=popularity&limit=500&list=all:websites](http://api.yup.io/search?searchText=superrare&category=popularity&limit=500&list=all:websites)

### Transaction

Method:

`POST`

Endpoint:

`/transaction/{params}`

Usage:

Push transaction to backend with given params.

Params:

`transaction, signature, signedDataHash`

Examp

