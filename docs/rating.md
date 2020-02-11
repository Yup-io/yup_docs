# Rating (Dots)

<img src="/media/dotsw.png" width="200px" class="flat-img"></img>

Yup allows you to rate and see the social value of all content, and earn money/influence for your opinion. You can rate either from the popup on any site or through the page itself on certain sites.

### How is rating calculated?

<img src="/media/dotgraphw.png" class="flat-img flat"></img>


With Yup, you can rate all content out of 5 dots (like star rating). 1's the lowest, 5's the highest. More extreme ratings (ex: 1/5, 4/5, 5/5) multiply your influence, but they cost more! You can only rate 5/5 three times a day currently.

<details toggle class="advanced">
<p margin="20px 0 0 0" class="adv-text">
 The dots are a simplified implementation of quadratic voting. 2/5 and 3/5 are considered low-cost ratings, costing 1 vote each. 1/5 and 4/5 cost 4 votes, and 5/5, the most extreme, costs 9 votes. Users currently have 40 votes a day.
</p>
  <summary toggle class="adv-text" ><strong>Advanced</strong></summary>
    <table class="tg">
      <tr>
        <th class="tg-0pky">Rating</th>
        <th class="tg-0pky">Weight Multiple</th>
        <th class="tg-0pky">Vote Cost</th>
      </tr>
      <tr>
        <td class="tg-0pky">1/5</td>
        <td class="tg-0pky">2x</td>
        <td class="tg-0pky">4</td>
      </tr>
      <tr>
        <td class="tg-0pky">2/5</td>
        <td class="tg-0pky">1x</td>
        <td class="tg-0pky">1</td>
      </tr>
      <tr>
        <td class="tg-0pky">3/5</td>
        <td class="tg-0pky">1x</td>
        <td class="tg-0pky">1</td>
      </tr>
      <tr>
        <td class="tg-0pky">4/5</td>
        <td class="tg-0pky">2x</td>
        <td class="tg-0pky">4</td>
      </tr>
      <tr>
        <td class="tg-0pky">5/5</td>
        <td class="tg-0pky">3x</td>
        <td class="tg-0pky">9</td>
      </tr>
    </table>
<br>


</details>

### Pop-up:  Rating on any site

<img src="/media/twitdemo.gif" class="rounded-img"></img>

You can rate any webpage simply by opening the popup while surfing that page. Click on the Yup button on the top right of your web browser to open the popup.

###  Rating on overlaid sites

You can rate overlaid sites directly from the page itself, using the inscribed Yup button there.

<details toggle style="background:#f4f4f4; padding:10px; border-radius: 5px;">
  <summary toggle><strong>Examples</strong></summary>
<br>
Lists are <b>weighed</b> by each category separately and distinctly. That means that the usage and influence being spent in a category determines its relevance on lists.

####  Twitter Example

<img class="img" src="/media/twitter.png"></img>
#### Reddit Example

<img class="img" src="/media/reddit.png"></img>
#### Google Maps Example

<img class="img" src="/media/gmaps.png"></img>
</details>

<br><br><br>

<style>
.img {
  box-shadow: 0px 0px 2px #a2a2a2;
}
.rounded-img {
  border-radius:10px;
  box-shadow: 0px 0px 2px 1px #dddddd;
}
.tg  {
  border-collapse:collapse;
  border-spacing:0;
  width: 100%;
  display: inline-table;
}
.markdown-section table {
    display: inline-table;
}
.advanced:focus {
  outline:none;
}
</style>
