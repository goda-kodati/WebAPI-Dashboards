function fetchWeather()
{
    var request=new XMLHttpRequest();
    const city=document.getElementById("city").value;
    const apiKey='b2fe2cbbf17935f14f5161d89fa84961'
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    request.open('GET',url,true);
    request.send();
    table=document.createElement("TABLE");
    request.onload=function()
    {
        
        table.border="1"
        row1=table.insertRow(-1);
        cell1=row1.insertCell(-1);
        cell2=row1.insertCell(-1);
        cell3=row1.insertCell(-1);
        cell1.innerHTML="Date & Time";
        cell2.innerHTML="Min_Temp";
        cell3.innerHTML="Max_Temp";
        res=JSON.parse(this.response);

        res.list.forEach(day=>
        {
            row1=table.insertRow(-1);
            c1=row1.insertCell(-1);
            c2=row1.insertCell(-1);
            c3=row1.insertCell(-1);
            c1.innerHTML=day.dt_txt;
            c2.innerHTML=day.main.temp_min;
            c3.innerHTML=day.main.temp_max;
        })
    }
    div1=document.getElementById("division");
    div1.append(table);
    
}