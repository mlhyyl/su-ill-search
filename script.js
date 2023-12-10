const customPath = document.getElementById("customPath");
const searchTerm = document.getElementById("searchTerm");

document.addEventListener('DOMContentLoaded', () => {
    searchTerm.focus();
    customPath.addEventListener('change', () => {
        var searchPath = customPath.value;
        if (searchTerm.value == '') {
            searchTerm.classList.add('error');
            customPath.selectedIndex = 0;
        } else {
            if (searchPath === "a") {
                var param = document.getElementById('searchTerm').value;
                var sabanciParam    = 'https://risc01.sabanciuniv.edu/search/a?SEARCH=' + param + '&sortdropdown=-&searchscope=9&submit=Submit';
                var kocParam        = 'https://libunix.ku.edu.tr/search/a?SEARCH=' + param + '&sortdropdown=-&searchscope=9';
                var buParam         = 'https://seyhan.library.boun.edu.tr/search/a?SEARCH=' + param + '&sortdropdown=-&searchscope=5';
                var odtuParam       = 'http://catalog.library.metu.edu.tr/search/a?SEARCH=' + param + '&sortdropdown=-&searchscope=4';
                var ituParam        = 'https://divit.library.itu.edu.tr/search/a?SEARCH=' + param + '&sortdropdown=-';
                var bilkentParam    = 'https://librarycatalog.bilkent.edu.tr/client/tr_TR/default/search/results?qu=' + param + '&te=&rt=false%7C%7C%7CAUTHOR%7C%7C%7CAuthor';
                var bilgiParam      = 'https://opac.bilgi.edu.tr/search/a?SEARCH=' + param + '&Submit.x=0&Submit.y=0';
                var worldCatParam   = 'https://www.worldcat.org/search?q=au%3A' + param + '&qt=advanced&dblist=638';
                var tokatParam      = 'http://www.toplukatalog.gov.tr/index.php?_f=1&the_page=1&cwid=2&keyword=' + param + '&tokat_search_field=3&order=0&command=Tara#alt';
                var oreillyParam    = 'https://learning.oreilly.com/search/?q=' + param + '&type=*&rows=50';
                chrome.runtime.sendMessage({
                    urls: [sabanciParam, kocParam, buParam, odtuParam, ituParam, bilkentParam, bilgiParam, worldCatParam, tokatParam, oreillyParam]
                });
            }
            if (searchPath === "t") {
                var param = document.getElementById('searchTerm').value;
                var sabanciParam    = 'https://risc01.sabanciuniv.edu/search/t?SEARCH=' + param + '&sortdropdown=-&searchscope=9&submit=Submit';
                var kocParam        = 'https://libunix.ku.edu.tr/search/t?SEARCH=' + param + '&sortdropdown=-&searchscope=9';
                var buParam         = 'https://seyhan.library.boun.edu.tr/search/t?SEARCH=' + param + '&sortdropdown=-&searchscope=5';
                var odtuParam       = 'http://catalog.library.metu.edu.tr/search/t?SEARCH=' + param + '&sortdropdown=-&searchscope=4';
                var ituParam        = 'https://divit.library.itu.edu.tr/search/t?SEARCH=' + param + '&sortdropdown=-';
                var bilkentParam    = 'https://librarycatalog.bilkent.edu.tr/client/tr_TR/default/search/results?qu=' + param + '&te=&rt=false%7C%7C%7CTITLE%7C%7C%7CTitle';
                var bilgiParam      = 'https://opac.bilgi.edu.tr/search/t?SEARCH=' + param + '&Submit.x=0&Submit.y=0';
                var worldCatParam   = 'https://www.worldcat.org/search?q=ti%3A' + param + '&qt=advanced&dblist=638';
                var tokatParam      = 'http://www.toplukatalog.gov.tr/index.php?_f=1&the_page=1&cwid=2&keyword=' + param + '&tokat_search_field=2&order=0&command=Tara#alt';
                var oreillyParam    = 'https://learning.oreilly.com/search/?q=' + param + '&type=*&rows=50';
                chrome.runtime.sendMessage({
                    urls: [sabanciParam, kocParam, buParam, odtuParam, ituParam, bilkentParam, bilgiParam, worldCatParam, tokatParam, oreillyParam]
                });                
            }
            if (searchPath === "b") {
                var param = document.getElementById('searchTerm').value;
                var sabanciParam    = 'https://risc01.sabanciuniv.edu/search/i?SEARCH=' + param + '&sortdropdown=-&searchscope=9&submit=Submit';
                var kocParam        = 'https://libunix.ku.edu.tr/search/i?SEARCH=' + param + '&sortdropdown=-&searchscope=9';
                var buParam         = 'https://seyhan.library.boun.edu.tr/search/i?SEARCH=' + param + '&sortdropdown=-&searchscope=5';
                var odtuParam       = 'http://catalog.library.metu.edu.tr/search/i?SEARCH=' + param + '&sortdropdown=-&searchscope=4';
                var ituParam        = 'https://divit.library.itu.edu.tr/search/i?SEARCH=' + param + '&sortdropdown=-';
                var bilkentParam    = 'https://librarycatalog.bilkent.edu.tr/client/tr_TR/default/search/results?qu=' + param + '&te=&rt=false%7C%7C%7CISBN%7C%7C%7CISBN';
                var bilgiParam      = 'https://opac.bilgi.edu.tr/search/i?SEARCH=' + param + '&Submit.x=0&Submit.y=0';
                var worldCatParam   = 'https://www.worldcat.org/search?q=bn%3A' + param + '&qt=advanced&dblist=638';
                var worldCatParam2  = 'https://www.worldcat.org/search?q=n2%3A' + param + '&qt=advanced&dblist=638';
                var tokatParam      = 'http://www.toplukatalog.gov.tr/index.php?_f=1&the_page=1&cwid=2&keyword=' + param + '&tokat_search_field=4&order=0&command=Tara#alt';
                var tokatParam2     = 'http://www.toplukatalog.gov.tr/index.php?_f=1&the_page=1&cwid=2&keyword=' + param + '&tokat_search_field=5&order=0&command=Tara#alt';
                var oreillyParam    = 'https://learning.oreilly.com/search/?q=' + param + '&type=*&rows=50';
                chrome.runtime.sendMessage({
                    urls: [sabanciParam, kocParam, buParam, odtuParam, ituParam, bilkentParam, bilgiParam, worldCatParam, tokatParam, worldCatParam2, tokatParam2, oreillyParam]
                });
            }
        }
    });

});