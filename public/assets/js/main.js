(()=>{var __webpack_modules__={986:()=>{eval("const iframes = document.querySelectorAll('iframe');\r\nconst array = Array.from(iframes)\r\nconsole.log(iframes)\r\niframes.forEach((iframe, index) => {\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTg2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYWxsZW5nZS1vcmFjbGUtb25lLTIvLi9zcmMvYXNzZXRzL2pzL2FzeW5jLWlmcmFtZS5qcz9mZjdkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcclxuY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGlmcmFtZXMpXHJcbmNvbnNvbGUubG9nKGlmcmFtZXMpXHJcbmlmcmFtZXMuZm9yRWFjaCgoaWZyYW1lLCBpbmRleCkgPT4ge1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///986\n")},692:()=>{eval("let firstDivCards = document.querySelector('#section-skills .all-cards:nth-of-type(1)');\r\nlet secondDivCards = firstDivCards.cloneNode(true);\r\ndocument.querySelector('#section-skills aside').appendChild(secondDivCards);\r\n\r\nlet containerSize = firstDivCards.offsetWidth;\r\nlet translateValue = 1;\r\n\r\nfunction carrousel() {\r\n        translateValue--;\r\n\r\n        if(translateValue > -1538) {\r\n            firstDivCards.style.transform = `translateX(${translateValue}px)`\r\n            secondDivCards.style.transform = `translateX(${translateValue}px)`\r\n        } else if (translateValue <= -1538) {\r\n            firstDivCards.style.transform = `translateX(${(containerSize*2)}px)`\r\n            secondDivCards.style.transform = `translateX(${(containerSize*2)}px)`\r\n            translateValue = 1\r\n        }\r\n}\r\n\r\nsetInterval(() => {\r\n    carrousel();\r\n}, 7);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZUFBZTtBQUN6RSwyREFBMkQsZUFBZTtBQUMxRSxVQUFVO0FBQ1YsMERBQTBELGtCQUFrQjtBQUM1RSwyREFBMkQsa0JBQWtCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFsbGVuZ2Utb3JhY2xlLW9uZS0yLy4vc3JjL2Fzc2V0cy9qcy9jYXJyb3VzZWwuanM/OWNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZmlyc3REaXZDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWN0aW9uLXNraWxscyAuYWxsLWNhcmRzOm50aC1vZi10eXBlKDEpJyk7XHJcbmxldCBzZWNvbmREaXZDYXJkcyA9IGZpcnN0RGl2Q2FyZHMuY2xvbmVOb2RlKHRydWUpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbi1za2lsbHMgYXNpZGUnKS5hcHBlbmRDaGlsZChzZWNvbmREaXZDYXJkcyk7XHJcblxyXG5sZXQgY29udGFpbmVyU2l6ZSA9IGZpcnN0RGl2Q2FyZHMub2Zmc2V0V2lkdGg7XHJcbmxldCB0cmFuc2xhdGVWYWx1ZSA9IDE7XHJcblxyXG5mdW5jdGlvbiBjYXJyb3VzZWwoKSB7XHJcbiAgICAgICAgdHJhbnNsYXRlVmFsdWUtLTtcclxuXHJcbiAgICAgICAgaWYodHJhbnNsYXRlVmFsdWUgPiAtMTUzOCkge1xyXG4gICAgICAgICAgICBmaXJzdERpdkNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlVmFsdWV9cHgpYFxyXG4gICAgICAgICAgICBzZWNvbmREaXZDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVZhbHVlfXB4KWBcclxuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZVZhbHVlIDw9IC0xNTM4KSB7XHJcbiAgICAgICAgICAgIGZpcnN0RGl2Q2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsoY29udGFpbmVyU2l6ZSoyKX1weClgXHJcbiAgICAgICAgICAgIHNlY29uZERpdkNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KGNvbnRhaW5lclNpemUqMil9cHgpYFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IDFcclxuICAgICAgICB9XHJcbn1cclxuXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNhcnJvdXNlbCgpO1xyXG59LCA3KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///692\n")},359:()=>{eval("let header = document.querySelector('header');\r\nconst navMobile = document.createElement('nav')\r\n\r\n//ANIMATION\r\nconst changeHeaderClass = () => {\r\n    \r\n    window.addEventListener('scroll', () => {\r\n        if (window.scrollY > 1) {\r\n            header.classList.add('headerAnimation');\r\n            navMobile.style.marginTop = `${60}px`\r\n        } else {\r\n            header.classList.remove('headerAnimation');\r\n            navMobile.style.marginTop = `${80}px`\r\n        }\r\n    });\r\n}; \r\n\r\nchangeHeaderClass();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDLFVBQVU7QUFDVjtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvaGVhZGVyLmpzPzM4YTEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG5cclxuLy9BTklNQVRJT05cclxuY29uc3QgY2hhbmdlSGVhZGVyQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMSkge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIG5hdk1vYmlsZS5zdHlsZS5tYXJnaW5Ub3AgPSBgJHs2MH1weGBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIG5hdk1vYmlsZS5zdHlsZS5tYXJnaW5Ub3AgPSBgJHs4MH1weGBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsgXHJcblxyXG5jaGFuZ2VIZWFkZXJDbGFzcygpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///359\n")},806:()=>{eval("// DOM ELEMENTS\r\nconst cards = document.querySelectorAll('#section__experienciaprofissional-circles .circle');\r\nconst btns = document.querySelectorAll('#section__experienciaprofissional-circles .circle button');\r\n\r\n// CREATE NEW ELEMENTS\r\nconst newDiv = document.createElement('div');\r\n    newDiv.classList.add('newDivJS');\r\n\r\nconst newTitle = document.createElement('h3');\r\nconst newParagraph = document.createElement('p');\r\n\r\n// AUXILIARY VARIABLES\r\nlet currentCard = \"\";\r\nlet clicked = false;\r\n\r\n\r\n// CHANGE CSS PARAMETERS\r\nfunction animateCSS(btn, index, display, rotate, width, radius, justContent, addDiv) {\r\n    btn.style.transform = `rotate(${rotate}deg)`;\r\n    \r\n    currentCard = cards[index];\r\n    currentCard.style.width = `${width}px`;\r\n    currentCard.style.borderRadius = `${radius}px`;\r\n    currentCard.style.justifyContent = justContent;\r\n    \r\n\r\n    addDiv == true ? currentCard.appendChild(newDiv) : newDiv.remove();\r\n        \r\n\r\n    if(currentCard.hasAttribute('fst')) {\r\n        newTitle.innerHTML = '2018 - 2020';\r\n        newParagraph.innerHTML = 'Controle/elaboração de Dashboards no software EXCEL, relatórios de estatísticas de vendas, faturamento e despesas mensais, gerenciamento no software DataWeb.';\r\n        newDiv.appendChild(newTitle);\r\n        newDiv.appendChild(newParagraph);\r\n    }\r\n\r\n    cards.forEach(card => {\r\n        if(card != currentCard) \r\n            card.style.display = display;\r\n    })\r\n}\r\n\r\n\r\n// BTNS CLICK EVENT TO EXECUTE FUNCTIONS\r\nbtns.forEach((btn, index) => {\r\n    btn.onclick = () => {\r\n        if(!clicked) {\r\n            animateCSS(btn, index, 'none', 180, 600, 6, 'space-evenly', true);\r\n            clicked = true\r\n        } else if (clicked == true) {\r\n            animateCSS(btn, index, 'flex', 360, 100, 100, 'center', false);\r\n            clicked = false\r\n        }\r\n    }\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2Qyx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvam9icy5qcz84YThjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBFTEVNRU5UU1xyXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZWN0aW9uX19leHBlcmllbmNpYXByb2Zpc3Npb25hbC1jaXJjbGVzIC5jaXJjbGUnKTtcclxuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZWN0aW9uX19leHBlcmllbmNpYXByb2Zpc3Npb25hbC1jaXJjbGVzIC5jaXJjbGUgYnV0dG9uJyk7XHJcblxyXG4vLyBDUkVBVEUgTkVXIEVMRU1FTlRTXHJcbmNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ25ld0RpdkpTJyk7XHJcblxyXG5jb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbmNvbnN0IG5ld1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbi8vIEFVWElMSUFSWSBWQVJJQUJMRVNcclxubGV0IGN1cnJlbnRDYXJkID0gXCJcIjtcclxubGV0IGNsaWNrZWQgPSBmYWxzZTtcclxuXHJcblxyXG4vLyBDSEFOR0UgQ1NTIFBBUkFNRVRFUlNcclxuZnVuY3Rpb24gYW5pbWF0ZUNTUyhidG4sIGluZGV4LCBkaXNwbGF5LCByb3RhdGUsIHdpZHRoLCByYWRpdXMsIGp1c3RDb250ZW50LCBhZGREaXYpIHtcclxuICAgIGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cm90YXRlfWRlZylgO1xyXG4gICAgXHJcbiAgICBjdXJyZW50Q2FyZCA9IGNhcmRzW2luZGV4XTtcclxuICAgIGN1cnJlbnRDYXJkLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgY3VycmVudENhcmQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7cmFkaXVzfXB4YDtcclxuICAgIGN1cnJlbnRDYXJkLnN0eWxlLmp1c3RpZnlDb250ZW50ID0ganVzdENvbnRlbnQ7XHJcbiAgICBcclxuXHJcbiAgICBhZGREaXYgPT0gdHJ1ZSA/IGN1cnJlbnRDYXJkLmFwcGVuZENoaWxkKG5ld0RpdikgOiBuZXdEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgaWYoY3VycmVudENhcmQuaGFzQXR0cmlidXRlKCdmc3QnKSkge1xyXG4gICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9ICcyMDE4IC0gMjAyMCc7XHJcbiAgICAgICAgbmV3UGFyYWdyYXBoLmlubmVySFRNTCA9ICdDb250cm9sZS9lbGFib3Jhw6fDo28gZGUgRGFzaGJvYXJkcyBubyBzb2Z0d2FyZSBFWENFTCwgcmVsYXTDs3Jpb3MgZGUgZXN0YXTDrXN0aWNhcyBkZSB2ZW5kYXMsIGZhdHVyYW1lbnRvIGUgZGVzcGVzYXMgbWVuc2FpcywgZ2VyZW5jaWFtZW50byBubyBzb2Z0d2FyZSBEYXRhV2ViLic7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYWdyYXBoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGlmKGNhcmQgIT0gY3VycmVudENhcmQpIFxyXG4gICAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIEJUTlMgQ0xJQ0sgRVZFTlQgVE8gRVhFQ1VURSBGVU5DVElPTlNcclxuYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XHJcbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZighY2xpY2tlZCkge1xyXG4gICAgICAgICAgICBhbmltYXRlQ1NTKGJ0biwgaW5kZXgsICdub25lJywgMTgwLCA2MDAsIDYsICdzcGFjZS1ldmVubHknLCB0cnVlKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBhbmltYXRlQ1NTKGJ0biwgaW5kZXgsICdmbGV4JywgMzYwLCAxMDAsIDEwMCwgJ2NlbnRlcicsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///806\n")},308:()=>{eval("let header = document.querySelector('header');\r\nconst navMobile = document.createElement('nav')\r\n\r\nconst menuMobile = () => {\r\n    const  ul = document.querySelector('#nav-widescreen ul')\r\n    const btnMobile = document.querySelector('#btn-mobile')\r\n    const copyMenu = ul.cloneNode(true);\r\n\r\n    copyMenu.classList.add('ul-mobile')\r\n    navMobile.appendChild(copyMenu)\r\n    navMobile.setAttribute('id', 'nav-mobile')\r\n\r\n    header.insertAdjacentElement('afterend', navMobile)\r\n\r\n    let clicked = false\r\n\r\n    btnMobile.addEventListener('click', () => {\r\n        let ulMobile = document.querySelector('#nav-mobile ul')\r\n        if (!clicked) {\r\n            ulMobile.style.display = 'flex'\r\n            navMobile.style.height = `${400}px`\r\n            clicked = true\r\n        } else {\r\n            ulMobile.style.display = 'none'\r\n            navMobile.style.height = 0\r\n            clicked = false\r\n        }\r\n    })\r\n}\r\n\r\nmenuMobile()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFsbGVuZ2Utb3JhY2xlLW9uZS0yLy4vc3JjL2Fzc2V0cy9qcy9tZW51TW9iaWxlLmpzP2I1ODEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG5cclxuY29uc3QgbWVudU1vYmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0ICB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtd2lkZXNjcmVlbiB1bCcpXHJcbiAgICBjb25zdCBidG5Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW1vYmlsZScpXHJcbiAgICBjb25zdCBjb3B5TWVudSA9IHVsLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBjb3B5TWVudS5jbGFzc0xpc3QuYWRkKCd1bC1tb2JpbGUnKVxyXG4gICAgbmF2TW9iaWxlLmFwcGVuZENoaWxkKGNvcHlNZW51KVxyXG4gICAgbmF2TW9iaWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LW1vYmlsZScpXHJcblxyXG4gICAgaGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuYXZNb2JpbGUpXHJcblxyXG4gICAgbGV0IGNsaWNrZWQgPSBmYWxzZVxyXG5cclxuICAgIGJ0bk1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgdWxNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1vYmlsZSB1bCcpXHJcbiAgICAgICAgaWYgKCFjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHVsTW9iaWxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgbmF2TW9iaWxlLnN0eWxlLmhlaWdodCA9IGAkezQwMH1weGBcclxuICAgICAgICAgICAgY2xpY2tlZCA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1bE1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIG5hdk1vYmlsZS5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbm1lbnVNb2JpbGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///308\n")},950:()=>{eval("\r\n\r\n\r\n/*** \r\n * //MENU HAMBUR & ANIMATE\r\nconst btnMobile = document.getElementById('btn-mobile');\r\nconst btns = document.querySelectorAll('#header a[href^=\"#\"]');\r\nconst nav = document.getElementById('nav');\r\nconst menu = document.getElementById('menu')\r\n\r\n * function toggleMenu(event) {\r\n    if (event.type === 'touchstart') {\r\n        event.preventDefault()\r\n    }\r\n\r\n    nav.classList.toggle('active') \r\n    menu.classList.toggle('active')\r\n}\r\n\r\n\r\nbtns.forEach(item => {\r\n    item.addEventListener('click', toggleMenu)\r\n})\r\n\r\nbtnMobile.addEventListener('click', toggleMenu);\r\nbtnMobile.addEventListener('touchstart', toggleMenu);\r\n */\r\n\r\n\r\n// CHANGE HEADER COLOR & ANIMATE\r\n\r\n\r\n\r\n/*\r\n// AUTO SELECT BUTTON:RADIOS\r\nlet counter = 1;\r\nfunction startCounter () {\r\n    document.getElementById('radio' + counter).checked = true; // SELECIONA O PRÓXIMO RÁDIO\r\n    counter++;\r\n    if (counter > 4) {\r\n        counter = 1;\r\n    }\r\n}\r\nsetInterval(startCounter, 3000);\r\n\r\n// CARROUSSEL\r\nconst imgs = document.getElementById(\"linguagens\");\r\nconst img = document.querySelectorAll(\"#linguagens .icone_linguagens\")\r\nlet idx = 0;\r\n\r\nfunction carrossel () {\r\n    idx++;\r\n    if (idx > img.length - 3) {\r\n        idx = -2;\r\n    }\r\n    imgs.style.transform = `translateX(${-idx * 250}px)`\r\n}\r\n\r\nsetInterval(carrossel, 1800); \r\n\r\n// SMOOTH SCROLL\r\nfunction scrollToIdOnClick(event) {\r\n    event.preventDefault();\r\n    \r\n    const element = event.target;\r\n    const id = element.getAttribute('href');\r\n    const to = document.querySelector(id).offsetTop;\r\n    \r\n    window.scroll({ \r\n        top: (function () {\r\n                if(element.getAttribute('href') !== '#header') {\r\n                    vl = to + 250\r\n                } else {\r\n                    vl = to\r\n                }\r\n                return vl\r\n        })(),\r\n        behavior: \"smooth\",\r\n    });\r\n}\r\n\r\nbtns.forEach(link => {\r\n    link.addEventListener('click', scrollToIdOnClick)\r\n})\r\n\r\n\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFsbGVuZ2Utb3JhY2xlLW9uZS0yLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanM/YTVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vKioqIFxyXG4gKiAvL01FTlUgSEFNQlVSICYgQU5JTUFURVxyXG5jb25zdCBidG5Nb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW1vYmlsZScpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlYWRlciBhW2hyZWZePVwiI1wiXScpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcblxyXG4gKiBmdW5jdGlvbiB0b2dnbGVNZW51KGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG5cclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSBcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufVxyXG5cclxuXHJcbmJ0bnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KVxyXG59KVxyXG5cclxuYnRuTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbmJ0bk1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG9nZ2xlTWVudSk7XHJcbiAqL1xyXG5cclxuXHJcbi8vIENIQU5HRSBIRUFERVIgQ09MT1IgJiBBTklNQVRFXHJcblxyXG5cclxuXHJcbi8qXHJcbi8vIEFVVE8gU0VMRUNUIEJVVFRPTjpSQURJT1NcclxubGV0IGNvdW50ZXIgPSAxO1xyXG5mdW5jdGlvbiBzdGFydENvdW50ZXIgKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhZGlvJyArIGNvdW50ZXIpLmNoZWNrZWQgPSB0cnVlOyAvLyBTRUxFQ0lPTkEgTyBQUsOTWElNTyBSw4FESU9cclxuICAgIGNvdW50ZXIrKztcclxuICAgIGlmIChjb3VudGVyID4gNCkge1xyXG4gICAgICAgIGNvdW50ZXIgPSAxO1xyXG4gICAgfVxyXG59XHJcbnNldEludGVydmFsKHN0YXJ0Q291bnRlciwgMzAwMCk7XHJcblxyXG4vLyBDQVJST1VTU0VMXHJcbmNvbnN0IGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmd1YWdlbnNcIik7XHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbGluZ3VhZ2VucyAuaWNvbmVfbGluZ3VhZ2Vuc1wiKVxyXG5sZXQgaWR4ID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNhcnJvc3NlbCAoKSB7XHJcbiAgICBpZHgrKztcclxuICAgIGlmIChpZHggPiBpbWcubGVuZ3RoIC0gMykge1xyXG4gICAgICAgIGlkeCA9IC0yO1xyXG4gICAgfVxyXG4gICAgaW1ncy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1pZHggKiAyNTB9cHgpYFxyXG59XHJcblxyXG5zZXRJbnRlcnZhbChjYXJyb3NzZWwsIDE4MDApOyBcclxuXHJcbi8vIFNNT09USCBTQ1JPTExcclxuZnVuY3Rpb24gc2Nyb2xsVG9JZE9uQ2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBjb25zdCB0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLm9mZnNldFRvcDtcclxuICAgIFxyXG4gICAgd2luZG93LnNjcm9sbCh7IFxyXG4gICAgICAgIHRvcDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICcjaGVhZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZsID0gdG8gKyAyNTBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmwgPSB0b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZsXHJcbiAgICAgICAgfSkoKSxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG59XHJcblxyXG5idG5zLmZvckVhY2gobGluayA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9JZE9uQ2xpY2spXHJcbn0pXHJcblxyXG5cclxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///950\n")},225:()=>{}};__webpack_modules__[225](),__webpack_modules__[950](),__webpack_modules__[359](),__webpack_modules__[692](),__webpack_modules__[806](),__webpack_modules__[986]();var __webpack_exports__={};__webpack_modules__[308]()})();