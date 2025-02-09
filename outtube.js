function handleClick(link, scheme = "outtube") {
    let schemeLink = `${scheme}:${link}`;
    navigator.clipboard.writeText(link);
    window.location.href = schemeLink;
}

function main() {
    const selectors = [
        "#video-title-link",
        "#video-title",
        "YTD-PLAYLIST-RENDERER > #content > #view-more > a",
        "YTD-BUTTON-RENDERER a",
        "YTD-COMPACT-VIDEO-RENDERER a:not(#thumbnail)"
    ];

    selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)))
        .forEach(appendLandingPageThumbnailCopyButton);
}


function createOuttubeButton() {
    let urlButton = document.createElement('button');
    urlButton.classList.add("out-tube");
    urlButton.addEventListener('click', function () {
        let href = this.parentElement.querySelector("a").href;
        console.log(href, this);
        handleClick(href);
    });
    return urlButton;
}

function createOuttubeDwnButton() {
    let urlButton = document.createElement('button');
    urlButton.classList.add("out-tube-dwn");
    urlButton.addEventListener('click', function () {
        let href = this.parentElement.querySelector("a").href;
        console.log(href, this);
        handleClick(href, "dwntube");
    });
    return urlButton;
}


function appendLandingPageThumbnailCopyButton(ele) {
    if (!ele) return;
    const parentEle = ele.parentElement;
    if (parentEle.querySelector(".out-tube")) return;


    parentEle.append(createOuttubeButton());
    parentEle.append(createOuttubeDwnButton());
}

function appendButton(el) {
    // let urlButton = document.createElement('button');
    // urlButton.classList.add("out-tube");
    // urlButton.addEventListener('click', function () {
    //     let href = window.location.href;
    //     console.log(href, this);
    //     handleClick(href);
    // });
    el.append(createOuttubeButton());
    el.append(createOuttubeDwnButton());
}

const observer = new MutationObserver(mutationList => {
    mutationList.filter(m => m.type === 'childList').forEach(m => {
        m.addedNodes.forEach(el => {
            // console.log(el.tagName);

            if (el.tagName === "YTD-RICH-GRID-MEDIA") {
                appendLandingPageThumbnailCopyButton(el.querySelector("#video-title-link"));
            }
            if (el.tagName === "YTD-PLAYLIST-RENDERER") {
                appendLandingPageThumbnailCopyButton(el.querySelector("#content > #view-more > a"));
            }
            if (el.tagName === "YTD-PLAYLIST-PANEL-VIDEO-RENDERER") {
                const viewFullPlaylistLink = Array.from(el.querySelectorAll("a")).find(a =>
                    a.textContent.trim().includes("Mix - ")
                    || a.getAttribute("id") === "video-title"
                    || a.getAttribute("href").includes("/watch?")
                    || a.getAttribute("href").includes("/playlist?")
                );
                appendLandingPageThumbnailCopyButton(viewFullPlaylistLink.firstElementChild);
            }
            if (["YTD-VIDEO-RENDERER", "YTD-PLAYLIST-VIDEO-RENDERER",
                "YT-LOCKUP-VIEW-MODEL",

                "YTD-COMPACT-VIDEO-RENDERER"].includes(el.tagName)) {
                const viewFullPlaylistLink = Array.from(el.querySelectorAll("a")).findLast(a =>
                    a.textContent.trim().includes("Mix - ")
                    || a.getAttribute("id") === "video-title"
                    || a.getAttribute("href")?.includes("/watch?")
                    || a.getAttribute("href")?.includes("/playlist?")
                );
                console.log("YTD-VIDEO-RENDERER", viewFullPlaylistLink, viewFullPlaylistLink.firstElementChild);

                appendLandingPageThumbnailCopyButton(viewFullPlaylistLink);
            }
            if (el.tagName === "YTD-COMMENT-SIMPLEBOX-RENDERER") {
                appendButton(el);
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });

main();

