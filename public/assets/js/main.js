(()=>{var __webpack_modules__={164:()=>{eval("// inacabado\r\nconst iframes = document.querySelectorAll('iframe');\r\nconst array = Array.from(iframes)\r\nconsole.log(iframes)\r\niframes.forEach((iframe, index) => {\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvYXN5bmNJZnJhbWUuanM/ZDBiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmFjYWJhZG9cclxuY29uc3QgaWZyYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpO1xyXG5jb25zdCBhcnJheSA9IEFycmF5LmZyb20oaWZyYW1lcylcclxuY29uc29sZS5sb2coaWZyYW1lcylcclxuaWZyYW1lcy5mb3JFYWNoKChpZnJhbWUsIGluZGV4KSA9PiB7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///164\n")},672:()=>{eval("let firstDivCards = document.querySelector('#section-skills .all-cards:nth-of-type(1)');\r\nlet secondDivCards = firstDivCards.cloneNode(true);\r\nlet aside = document.querySelector('#section-skills aside')\r\n    aside.appendChild(secondDivCards);\r\n\r\nlet containerSize = firstDivCards.offsetWidth;\r\nlet translateValue = 1;\r\n\r\nfunction carrousel() {\r\n        translateValue--;\r\n\r\n        if(translateValue > -1538) {\r\n            firstDivCards.style.transform = `translateX(${translateValue}px)`\r\n            secondDivCards.style.transform = `translateX(${translateValue}px)`\r\n        } else if (translateValue <= -1538) {\r\n            firstDivCards.style.transform = `translateX(${(containerSize*2)}px)`\r\n            secondDivCards.style.transform = `translateX(${(containerSize*2)}px)`\r\n            translateValue = 1\r\n        }\r\n}\r\n\r\nlet refreshInterval = \"\"\r\n\r\naside.addEventListener('mouseenter', () => {\r\n    refreshInterval = setInterval(carrousel, 7)\r\n})\r\n\r\naside.addEventListener('mouseleave', () => {\r\n    clearInterval(refreshInterval)\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxlQUFlO0FBQ3pFLDJEQUEyRCxlQUFlO0FBQzFFLFVBQVU7QUFDViwwREFBMEQsa0JBQWtCO0FBQzVFLDJEQUEyRCxrQkFBa0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvY2Fycm91c2VsQW5pbWF0aW9uLmpzP2E1YzciXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGZpcnN0RGl2Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbi1za2lsbHMgLmFsbC1jYXJkczpudGgtb2YtdHlwZSgxKScpO1xyXG5sZXQgc2Vjb25kRGl2Q2FyZHMgPSBmaXJzdERpdkNhcmRzLmNsb25lTm9kZSh0cnVlKTtcclxubGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY3Rpb24tc2tpbGxzIGFzaWRlJylcclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHNlY29uZERpdkNhcmRzKTtcclxuXHJcbmxldCBjb250YWluZXJTaXplID0gZmlyc3REaXZDYXJkcy5vZmZzZXRXaWR0aDtcclxubGV0IHRyYW5zbGF0ZVZhbHVlID0gMTtcclxuXHJcbmZ1bmN0aW9uIGNhcnJvdXNlbCgpIHtcclxuICAgICAgICB0cmFuc2xhdGVWYWx1ZS0tO1xyXG5cclxuICAgICAgICBpZih0cmFuc2xhdGVWYWx1ZSA+IC0xNTM4KSB7XHJcbiAgICAgICAgICAgIGZpcnN0RGl2Q2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZX1weClgXHJcbiAgICAgICAgICAgIHNlY29uZERpdkNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlVmFsdWV9cHgpYFxyXG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlVmFsdWUgPD0gLTE1MzgpIHtcclxuICAgICAgICAgICAgZmlyc3REaXZDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyhjb250YWluZXJTaXplKjIpfXB4KWBcclxuICAgICAgICAgICAgc2Vjb25kRGl2Q2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsoY29udGFpbmVyU2l6ZSoyKX1weClgXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlID0gMVxyXG4gICAgICAgIH1cclxufVxyXG5cclxubGV0IHJlZnJlc2hJbnRlcnZhbCA9IFwiXCJcclxuXHJcbmFzaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICByZWZyZXNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYXJyb3VzZWwsIDcpXHJcbn0pXHJcblxyXG5hc2lkZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgY2xlYXJJbnRlcnZhbChyZWZyZXNoSW50ZXJ2YWwpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///672\n")},289:()=>{eval("let header = document.querySelector('header');\r\nconst navMobile = document.createElement('nav')\r\n\r\n//ANIMATION\r\nconst changeHeaderClass = () => {\r\n    \r\n    window.addEventListener('scroll', () => {\r\n        if (window.scrollY > 1) {\r\n            header.classList.add('headerAnimation');\r\n            document.querySelector('#nav-mobile').style.marginTop = `${60}px`\r\n        } else {\r\n            header.classList.remove('headerAnimation');\r\n            document.querySelector('#nav-mobile').style.marginTop = `${80}px`\r\n        }\r\n    });\r\n}; \r\n\r\nchangeHeaderClass();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxHQUFHO0FBQzFFLFVBQVU7QUFDVjtBQUNBLHVFQUF1RSxHQUFHO0FBQzFFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvaGVhZGVyQW5pbWF0aW9uLmpzPzRiOWUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5jb25zdCBuYXZNb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG5cclxuLy9BTklNQVRJT05cclxuY29uc3QgY2hhbmdlSGVhZGVyQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMSkge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtbW9iaWxlJykuc3R5bGUubWFyZ2luVG9wID0gYCR7NjB9cHhgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlckFuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1vYmlsZScpLnN0eWxlLm1hcmdpblRvcCA9IGAkezgwfXB4YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59OyBcclxuXHJcbmNoYW5nZUhlYWRlckNsYXNzKCk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///289\n")},22:()=>{eval("let iframeOverlap = document.querySelectorAll('.iframe-sobreposicao')\r\n\r\nfunction removeOverlap (index) {\r\n   iframeOverlap[index].style.display = 'none'\r\n}\r\n\r\niframeOverlap.forEach((iframe, index) => {\r\n    \"click touchstart\".split(\" \").forEach(event => {\r\n        iframe.addEventListener(event, () => {\r\n            removeOverlap(index)\r\n        });\r\n    });\r\n})\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYWxsZW5nZS1vcmFjbGUtb25lLTIvLi9zcmMvYXNzZXRzL2pzL2lmcmFtZUFuaW1hdGlvbi5qcz8yOTBiIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpZnJhbWVPdmVybGFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlmcmFtZS1zb2JyZXBvc2ljYW8nKVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlT3ZlcmxhcCAoaW5kZXgpIHtcclxuICAgaWZyYW1lT3ZlcmxhcFtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59XHJcblxyXG5pZnJhbWVPdmVybGFwLmZvckVhY2goKGlmcmFtZSwgaW5kZXgpID0+IHtcclxuICAgIFwiY2xpY2sgdG91Y2hzdGFydFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICBpZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZW1vdmVPdmVybGFwKGluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n")},18:()=>{eval("// DOM ELEMENTS\r\nconst cards = document.querySelectorAll('#section__experienciaprofissional-circles .circle');\r\nconst btns = document.querySelectorAll('#section__experienciaprofissional-circles .circle button');\r\n\r\n// CREATE NEW ELEMENTS\r\nconst newDiv = document.createElement('div');\r\n    newDiv.classList.add('newDivJS');\r\n\r\nconst newTitle = document.createElement('h3');\r\nconst newParagraph = document.createElement('p');\r\n\r\n// AUXILIARY VARIABLES\r\nlet currentCard = \"\";\r\nlet clicked = false;\r\n\r\n\r\n// CHANGE CSS PARAMETERS\r\nfunction animateCSS(btn, index, display, rotate, addDiv, addClass) {\r\n    btn.style.transform = `rotate(${rotate}deg)`;\r\n    \r\n    currentCard = cards[index];\r\n\r\n    if(addDiv) {\r\n        currentCard.appendChild(newDiv)\r\n        currentCard.classList.add('rectangle')\r\n    } else {\r\n        newDiv.remove()\r\n        currentCard.classList.remove('rectangle')\r\n    } \r\n\r\n        if (currentCard.hasAttribute('fst')) {\r\n            newDiv.appendChild(newTitle);\r\n            newDiv.appendChild(newParagraph);\r\n            newTitle.innerHTML = '2015 - 2016';\r\n            newParagraph.innerHTML = 'Correspondente da IV GERES da Secretaria Estadual de Saúde de Pernambuco, gerenciamento no software E-SUS, desenvolvedor de Dashboards no software EXCEL, consultor nos sites CMCE e APACNET. Gestão de vagas da fila do SUS.';\r\n\r\n        } else if (currentCard.hasAttribute('scnd')) {\r\n            newDiv.appendChild(newTitle);\r\n            newDiv.appendChild(newParagraph);\r\n            newTitle.innerHTML = '2015 - 2016';\r\n            newParagraph.innerHTML = 'Desenvolvimento de projetos arquitetônicos no software AutoCAD, supervisão de serviços em campo, criação planilhas e Dashboards software EXCEL.';\r\n\r\n        } else if (currentCard.hasAttribute('thrd')) {\r\n            newDiv.appendChild(newTitle);\r\n            newDiv.appendChild(newParagraph);\r\n            newTitle.innerHTML = '2018 - 2020';\r\n            newParagraph.innerHTML = 'Controle/elaboração de Dashboards no software EXCEL, contas a pagar, relatórios de estatísticas de vendas, faturamento e despesas mensais, gerenciamento no software DataWeb.';\r\n\r\n        } else {\r\n            newDiv.appendChild(newTitle);\r\n            newDiv.appendChild(newParagraph);\r\n            newTitle.innerHTML = '2020 - 2022';\r\n            newParagraph.innerHTML = 'Responsável pela precificação de produtos das empresas do grupo, desenvolvedor web, marketing digital, elaboração de reuniões mensais, elaboração e levantamento de relatórios de dados estatísticos gerais.';\r\n        }\r\n    cards.forEach(card => {\r\n        if(card != currentCard) \r\n            card.style.display = display;\r\n    })\r\n}\r\n\r\n\r\n// BTNS CLICK EVENT TO EXECUTE FUNCTIONS\r\nbtns.forEach((btn, index) => {\r\n    btn.onclick = () => {\r\n        if (!clicked) {\r\n            animateCSS(btn, index, 'none', 180, true);\r\n            clicked = true\r\n        } else if (clicked) {\r\n            animateCSS(btn, index, 'flex', 360, false);\r\n            clicked = false\r\n        }\r\n    }\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFsbGVuZ2Utb3JhY2xlLW9uZS0yLy4vc3JjL2Fzc2V0cy9qcy9qb2JzQW5pbWF0aW9uLmpzPzI0ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRE9NIEVMRU1FTlRTXHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NlY3Rpb25fX2V4cGVyaWVuY2lhcHJvZmlzc2lvbmFsLWNpcmNsZXMgLmNpcmNsZScpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NlY3Rpb25fX2V4cGVyaWVuY2lhcHJvZmlzc2lvbmFsLWNpcmNsZXMgLmNpcmNsZSBidXR0b24nKTtcclxuXHJcbi8vIENSRUFURSBORVcgRUxFTUVOVFNcclxuY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnbmV3RGl2SlMnKTtcclxuXHJcbmNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuY29uc3QgbmV3UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuLy8gQVVYSUxJQVJZIFZBUklBQkxFU1xyXG5sZXQgY3VycmVudENhcmQgPSBcIlwiO1xyXG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xyXG5cclxuXHJcbi8vIENIQU5HRSBDU1MgUEFSQU1FVEVSU1xyXG5mdW5jdGlvbiBhbmltYXRlQ1NTKGJ0biwgaW5kZXgsIGRpc3BsYXksIHJvdGF0ZSwgYWRkRGl2LCBhZGRDbGFzcykge1xyXG4gICAgYnRuLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtyb3RhdGV9ZGVnKWA7XHJcbiAgICBcclxuICAgIGN1cnJlbnRDYXJkID0gY2FyZHNbaW5kZXhdO1xyXG5cclxuICAgIGlmKGFkZERpdikge1xyXG4gICAgICAgIGN1cnJlbnRDYXJkLmFwcGVuZENoaWxkKG5ld0RpdilcclxuICAgICAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdyZWN0YW5nbGUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdEaXYucmVtb3ZlKClcclxuICAgICAgICBjdXJyZW50Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdyZWN0YW5nbGUnKVxyXG4gICAgfSBcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkLmhhc0F0dHJpYnV0ZSgnZnN0JykpIHtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1BhcmFncmFwaCk7XHJcbiAgICAgICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9ICcyMDE1IC0gMjAxNic7XHJcbiAgICAgICAgICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSAnQ29ycmVzcG9uZGVudGUgZGEgSVYgR0VSRVMgZGEgU2VjcmV0YXJpYSBFc3RhZHVhbCBkZSBTYcO6ZGUgZGUgUGVybmFtYnVjbywgZ2VyZW5jaWFtZW50byBubyBzb2Z0d2FyZSBFLVNVUywgZGVzZW52b2x2ZWRvciBkZSBEYXNoYm9hcmRzIG5vIHNvZnR3YXJlIEVYQ0VMLCBjb25zdWx0b3Igbm9zIHNpdGVzIENNQ0UgZSBBUEFDTkVULiBHZXN0w6NvIGRlIHZhZ2FzIGRhIGZpbGEgZG8gU1VTLic7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENhcmQuaGFzQXR0cmlidXRlKCdzY25kJykpIHtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1BhcmFncmFwaCk7XHJcbiAgICAgICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9ICcyMDE1IC0gMjAxNic7XHJcbiAgICAgICAgICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSAnRGVzZW52b2x2aW1lbnRvIGRlIHByb2pldG9zIGFycXVpdGV0w7RuaWNvcyBubyBzb2Z0d2FyZSBBdXRvQ0FELCBzdXBlcnZpc8OjbyBkZSBzZXJ2acOnb3MgZW0gY2FtcG8sIGNyaWHDp8OjbyBwbGFuaWxoYXMgZSBEYXNoYm9hcmRzIHNvZnR3YXJlIEVYQ0VMLic7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENhcmQuaGFzQXR0cmlidXRlKCd0aHJkJykpIHtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1BhcmFncmFwaCk7XHJcbiAgICAgICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9ICcyMDE4IC0gMjAyMCc7XHJcbiAgICAgICAgICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSAnQ29udHJvbGUvZWxhYm9yYcOnw6NvIGRlIERhc2hib2FyZHMgbm8gc29mdHdhcmUgRVhDRUwsIGNvbnRhcyBhIHBhZ2FyLCByZWxhdMOzcmlvcyBkZSBlc3RhdMOtc3RpY2FzIGRlIHZlbmRhcywgZmF0dXJhbWVudG8gZSBkZXNwZXNhcyBtZW5zYWlzLCBnZXJlbmNpYW1lbnRvIG5vIHNvZnR3YXJlIERhdGFXZWIuJztcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1BhcmFncmFwaCk7XHJcbiAgICAgICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9ICcyMDIwIC0gMjAyMic7XHJcbiAgICAgICAgICAgIG5ld1BhcmFncmFwaC5pbm5lckhUTUwgPSAnUmVzcG9uc8OhdmVsIHBlbGEgcHJlY2lmaWNhw6fDo28gZGUgcHJvZHV0b3MgZGFzIGVtcHJlc2FzIGRvIGdydXBvLCBkZXNlbnZvbHZlZG9yIHdlYiwgbWFya2V0aW5nIGRpZ2l0YWwsIGVsYWJvcmHDp8OjbyBkZSByZXVuacO1ZXMgbWVuc2FpcywgZWxhYm9yYcOnw6NvIGUgbGV2YW50YW1lbnRvIGRlIHJlbGF0w7NyaW9zIGRlIGRhZG9zIGVzdGF0w61zdGljb3MgZ2VyYWlzLic7XHJcbiAgICAgICAgfVxyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBpZihjYXJkICE9IGN1cnJlbnRDYXJkKSBcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBCVE5TIENMSUNLIEVWRU5UIFRPIEVYRUNVVEUgRlVOQ1RJT05TXHJcbmJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xyXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVDU1MoYnRuLCBpbmRleCwgJ25vbmUnLCAxODAsIHRydWUpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgICBhbmltYXRlQ1NTKGJ0biwgaW5kZXgsICdmbGV4JywgMzYwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n")},308:()=>{eval("let header = document.querySelector('header');\r\nconst navMobile = document.createElement('nav')\r\n\r\nconst menuMobile = () => {\r\n    const  ul = document.querySelector('#nav-widescreen ul')\r\n    const btnMobile = document.querySelector('#btn-mobile')\r\n    const copyMenu = ul.cloneNode(true);\r\n\r\n    copyMenu.classList.add('ul-mobile')\r\n    navMobile.appendChild(copyMenu)\r\n    navMobile.setAttribute('id', 'nav-mobile')\r\n\r\n    header.insertAdjacentElement('afterend', navMobile)\r\n\r\n    let clicked = false\r\n\r\n    btnMobile.addEventListener('click', () => {\r\n        let ulMobile = document.querySelector('#nav-mobile ul')\r\n        \r\n        if (!clicked) {\r\n            ulMobile.style.display = 'flex'\r\n            navMobile.style.height = `${400}px`\r\n            clicked = true\r\n        } else {\r\n            ulMobile.style.display = 'none'\r\n            navMobile.style.height = 0\r\n            clicked = false\r\n        }\r\n    })\r\n}\r\n\r\nmenuMobile()\r\n\r\n\r\n//ANIMATION\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhbGxlbmdlLW9yYWNsZS1vbmUtMi8uL3NyYy9hc3NldHMvanMvbWVudU1vYmlsZS5qcz9iNTgxIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuY29uc3QgbmF2TW9iaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuXHJcbmNvbnN0IG1lbnVNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXdpZGVzY3JlZW4gdWwnKVxyXG4gICAgY29uc3QgYnRuTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1tb2JpbGUnKVxyXG4gICAgY29uc3QgY29weU1lbnUgPSB1bC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgY29weU1lbnUuY2xhc3NMaXN0LmFkZCgndWwtbW9iaWxlJylcclxuICAgIG5hdk1vYmlsZS5hcHBlbmRDaGlsZChjb3B5TWVudSlcclxuICAgIG5hdk1vYmlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1tb2JpbGUnKVxyXG5cclxuICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbmF2TW9iaWxlKVxyXG5cclxuICAgIGxldCBjbGlja2VkID0gZmFsc2VcclxuXHJcbiAgICBidG5Nb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVsTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tb2JpbGUgdWwnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghY2xpY2tlZCkge1xyXG4gICAgICAgICAgICB1bE1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgIG5hdk1vYmlsZS5zdHlsZS5oZWlnaHQgPSBgJHs0MDB9cHhgXHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWxNb2JpbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBuYXZNb2JpbGUuc3R5bGUuaGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICBjbGlja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5tZW51TW9iaWxlKClcclxuXHJcblxyXG4vL0FOSU1BVElPTlxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///308\n")},225:()=>{}};__webpack_modules__[225](),__webpack_modules__[289](),__webpack_modules__[672](),__webpack_modules__[18](),__webpack_modules__[164](),__webpack_modules__[308]();var __webpack_exports__={};__webpack_modules__[22]()})();