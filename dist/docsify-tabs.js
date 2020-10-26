/*!
 * docsify-tabs
 * v1.1.2
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
(function() {
    "use strict";
    var version = "1.1.2";
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css = '--theme-color{color:#fedeef}:root{--theme-color:#fedeef;--docsifytabs-theme-color:#fedeef;--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#00eab7;--docsifytabs-tab-color--active:#00eab7;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:0.5rem 1.75rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";-ms-flex-order:0;order:0;-ms-flex:1;flex:1 1}.docsify-tabs__tab{-ms-flex-order:-1;order:-1;position:relative;margin:0;font-size:inherit;appearance:none}.docsify-tabs__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-tabs__tab--active+.docsify-tabs__content{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{padding:.6em 1em;padding:var(--docsifytabs-tab-padding);background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#00eab7;color:var(--docsifytabs-tab-color)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:#00eab7;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{padding:.5rem 1.75rem;padding:var(--docsifytabs-content-padding);background:inherit;background:var(--docsifytabs-content-background)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-width:1px;border-color:#ededed;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{margin-right:1px;margin-right:var(--docsifytabs-border-px);border-top-width:0;border-left-width:0;border-right-width:0}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 #fedeef;box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px));border-top:0;border-radius:0 ;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px)}.docsify-tabs--material .docsify-tabs__tab{margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px));background:transparent;border:0}.docsify-tabs--material .docsify-tabs__tab--active{box-shadow:0 3px 0 0 #fedeef;box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color);background:transparent}.docsify-tabs--material .docsify-tabs__content{border-width:1px 0;border-width:var(--docsifytabs-border-px) 0;border-style:solid;border-color:#ededed;border-color:var(--docsifytabs-border-color)}';
    styleInject(css, {
        insertAt: "top"
    });
    var commentReplaceMark = "tabs:replace";
    var classNames = {
        tabsContainer: "content",
        tabBlock: "docsify-tabs",
        tabButton: "docsify-tabs__tab",
        tabButtonActive: "docsify-tabs__tab--active",
        tabContent: "docsify-tabs__content"
    };
    var regex = {
        codeMarkup: /(```[\s\S]*?```)/gm,
        commentReplaceMarkup: new RegExp("\x3c!-- ".concat(commentReplaceMark, " (.*) --\x3e")),
        tabBlockMarkup: /[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,
        tabCommentMarkup: /<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]+(?=<!-+\s+tabs?:)/m,
        tabHeadingMarkup: /[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m
    };
    var settings = {
        persist: true,
        sync: true,
        theme: "classic",
        tabComments: true,
        tabHeadings: true
    };
    function renderTabsStage1(content) {
        var codeBlockMatch = content.match(regex.codeMarkup) || [];
        var codeBlockMarkers = codeBlockMatch.map(function(item, i) {
            var codeMarker = "\x3c!-- ".concat(commentReplaceMark, " CODEBLOCK").concat(i, " --\x3e");
            content = content.replace(item, codeMarker);
            return codeMarker;
        });
        var tabTheme = settings.theme ? "".concat(classNames.tabBlock, "--").concat(settings.theme) : "";
        var tabBlockMatch;
        var tabMatch;
        while ((tabBlockMatch = regex.tabBlockMarkup.exec(content)) !== null) {
            var tabBlock = tabBlockMatch[0];
            var tabStartReplacement = "";
            var tabEndReplacement = "";
            var hasTabComments = settings.tabComments && regex.tabCommentMarkup.test(tabBlock);
            var hasTabHeadings = settings.tabHeadings && regex.tabHeadingMarkup.test(tabBlock);
            var tabBlockIndent = tabBlockMatch[1];
            var tabBlockStart = tabBlockMatch[2];
            var tabBlockEnd = tabBlockMatch[4];
            if (hasTabComments || hasTabHeadings) {
                tabStartReplacement = "\x3c!-- ".concat(commentReplaceMark, ' <div class="').concat([ classNames.tabBlock, tabTheme ].join(" "), '"> --\x3e');
                tabEndReplacement = "\n".concat(tabBlockIndent, "\x3c!-- ").concat(commentReplaceMark, " </div> --\x3e");
                while ((tabMatch = (settings.tabComments ? regex.tabCommentMarkup.exec(tabBlock) : null) || (settings.tabHeadings ? regex.tabHeadingMarkup.exec(tabBlock) : null)) !== null) {
                    var tabTitle = (tabMatch[2] || "[Tab]").trim();
                    var tabContent = (tabMatch[3] || "").trim();
                    tabBlock = tabBlock.replace(tabMatch[0], [ "\n".concat(tabBlockIndent, "\x3c!-- ").concat(commentReplaceMark, ' <button class="').concat(classNames.tabButton, '" data-tab="').concat(tabTitle.toLowerCase(), '">').concat(tabTitle, "</button> --\x3e"), "\n".concat(tabBlockIndent, "\x3c!-- ").concat(commentReplaceMark, ' <div class="').concat(classNames.tabContent, '" data-tab-content="').concat(tabTitle.toLowerCase(), '"> --\x3e'), "\n\n".concat(tabBlockIndent).concat(tabContent), "\n\n".concat(tabBlockIndent, "\x3c!-- ").concat(commentReplaceMark, " </div> --\x3e") ].join(""));
                }
            }
            tabBlock = tabBlock.replace(tabBlockStart, tabStartReplacement);
            tabBlock = tabBlock.replace(tabBlockEnd, tabEndReplacement);
            content = content.replace(tabBlockMatch[0], tabBlock);
        }
        codeBlockMarkers.forEach(function(item, i) {
            content = content.replace(item, codeBlockMatch[i]);
        });
        return content;
    }
    function renderTabsStage2(html) {
        var tabReplaceMatch;
        while ((tabReplaceMatch = regex.commentReplaceMarkup.exec(html)) !== null) {
            var tabComment = tabReplaceMatch[0];
            var tabReplacement = tabReplaceMatch[1] || "";
            html = html.replace(tabComment, tabReplacement);
        }
        return html;
    }
    function setDefaultTabs() {
        var tabsContainer = document.querySelector(".".concat(classNames.tabsContainer));
        var tabBlocks = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat(classNames.tabBlock))) : [];
        var tabStorage = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
        tabBlocks.forEach(function(tabBlock, index) {
            var activeButtonDefault = tabBlock.querySelector(".".concat(classNames.tabButton));
            var activeButtonPersist = settings.persist ? tabBlock.querySelector(".".concat(classNames.tabButton, '[data-tab="').concat(tabStorage[index], '"]')) : null;
            var activeButton = activeButtonPersist || activeButtonDefault;
            activeButton && activeButton.classList.add(classNames.tabButtonActive);
        });
    }
    function setActiveTab(elm, isSync) {
        var isTabButton = elm.classList.contains(classNames.tabButton);
        if (isTabButton) {
            var activeButton = elm;
            var activeButtonLabel = activeButton.getAttribute("data-tab");
            var tabsContainer = document.querySelector(".".concat(classNames.tabsContainer));
            var tabBlock = activeButton.parentNode;
            var tabButtons = Array.apply(null, tabBlock.querySelectorAll(".".concat(classNames.tabButton)));
            var tabBlockOffset = tabBlock.offsetTop;
            tabButtons.forEach(function(buttonElm) {
                return buttonElm.classList.remove(classNames.tabButtonActive);
            });
            activeButton.classList.add(classNames.tabButtonActive);
            if (settings.persist) {
                var tabBlocks = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat(classNames.tabBlock))) : [];
                var tabBlockIndex = tabBlocks.indexOf(tabBlock);
                var tabStorage = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
                tabStorage[tabBlockIndex] = activeButtonLabel;
                sessionStorage.setItem(window.location.href, JSON.stringify(tabStorage));
            }
            if (settings.sync && !isSync) {
                var tabButtonMatches = tabsContainer ? Array.apply(null, tabsContainer.querySelectorAll(".".concat(classNames.tabButton, '[data-tab="').concat(activeButtonLabel, '"]'))) : [];
                tabButtonMatches.forEach(function(tabButtonMatch) {
                    setActiveTab(tabButtonMatch, true);
                });
                window.scrollBy(0, 0 - (tabBlockOffset - tabBlock.offsetTop));
            }
        }
    }
    function docsifyTabs(hook, vm) {
        var hasTabs = false;
        hook.beforeEach(function(content) {
            hasTabs = regex.tabBlockMarkup.test(content);
            if (hasTabs) {
                content = renderTabsStage1(content);
            }
            return content;
        });
        hook.afterEach(function(html, next) {
            if (hasTabs) {
                html = renderTabsStage2(html);
            }
            next(html);
        });
        hook.doneEach(function() {
            if (hasTabs) {
                setDefaultTabs();
            }
        });
        hook.mounted(function() {
            var tabsContainer = document.querySelector(".".concat(classNames.tabsContainer));
            tabsContainer && tabsContainer.addEventListener("click", function(evt) {
                setActiveTab(evt.target);
            });
        });
    }
    if (window) {
        window.$docsify = window.$docsify || {};
        window.$docsify.tabs = window.$docsify.tabs || {};
        Object.keys(window.$docsify.tabs).forEach(function(key) {
            if (settings.hasOwnProperty(key)) {
                settings[key] = window.$docsify.tabs[key];
            }
        });
        window.$docsify.tabs.version = version;
        if (settings.tabComments || settings.tabHeadings) {
            window.$docsify.plugins = [].concat(docsifyTabs, window.$docsify.plugins || []);
        }
    }
})();
//# sourceMappingURL=docsify-tabs.js.map
