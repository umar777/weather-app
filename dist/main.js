(()=>{const e=document.getElementById("container"),t=document.createElement("div"),n=document.createElement("div");n.setAttribute("id","loading");const o=document.createElement("label");o.textContent="Enter something:",o.setAttribute("for","myInput");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","query"),c.setAttribute("name","query");const i=document.createElement("button");i.textContent="Submit",e.appendChild(o),e.appendChild(c),e.appendChild(t),e.appendChild(i),e.appendChild(n),i.addEventListener("click",(function(){const e=document.getElementById("query").value;n.style.display="block",async function(e){const t=await fetch("http://api.weatherapi.com/v1/current.json?key=bf01ff1b48d04646a5a215645231108&q="+e+"&aqi=no",{mode:"cors"});return await t.json()}(e).then((e=>{t.innerHTML=`<h2>Weather for ${e.location.name}, ${e.location.country}</h2><p>Temperature: ${e.current.temp_c}°C</p><p>Condition: ${e.current.condition.text}</p>`,console.log("resolved:",e)})).catch((e=>{console.log("rejected:",e)})).finally((()=>{n.style.display="none"}))}))})();