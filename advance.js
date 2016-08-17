/* 
 allows you to easily advance to the next page in series of numbered web pages, such as you might find on answers.com
 or other annoying sites where the next button moves around unpredictably, is placed closed to ad content, or requires
 significant scrolling - it assumes that urls take the form of http(s)://domain.abc/something/3, http(s)://domain.abc/something-3
 or similar - the code identifies the last number in the url and increments it - I put the code below behind a button on my
 bookmarks toolbar called "Advance"
*/
javascript:curPage=parseInt(document.location.toString().match(/(\d+)$/)[0], 10);
newPage=curPage+1;
n=document.location.toString().lastIndexOf(curPage);
if (n >= 0) {
    newUrl = document.location.toString().substring(0, n) + newPage;
}
document.location.href=newUrl;
void(0);
