let userInput = document.getElementById("date")
        // adding a condition for today and last date, where no future date will show
        userInput.max = new Date().toISOString().split('T')[0];
        let result = document.getElementById("result");
        // let secResult = document.getElementById("secResult");

        function ageNow(){
            let birthdate = new Date(userInput.value);
            
            let d1 =birthdate.getDate();
            let m1 = birthdate.getMonth() + 1;
            let y1 = birthdate.getFullYear(); 

            let today = new Date(); 

            let d2 = today.getDate();
            let m2 = today.getMonth() + 1;
            let y2 = today.getFullYear();

            let d3, m3, y3;

            y3 = y2 - y1;

            if(m2 >= m1){
                m3 = m2 - m1;
            } else {
                y3--;
                m3 = 12 + m2 - m1;
            }   
            if(d2 >= d1){
                d3 = d2 - d1;
            } else {
                m3--;
                d3 = getDaysInMonth(y1, m1) + d2 - d1;
            }
                if(m3 < 0){
                    m3 = 11;
                    y3--;
                }
                
            
            // console.log(y3, m3, d3);   /**showing age differece**/
            result.innerHTML = `Your current age is <span>${y3} </span> years <span>${m3} </span> months and <span>${d3} </span> days`;
            // secResult.innerHTML = `You have lived for <span>${y3 * 12 + m3} </span> months and <span>${(y3 * 12 + m3) * 30 + d3} </span> days`;
        }



        //  function secAgeNow(){
        //     let birthdate = new Date(userInput.value);
            
        //     let d1 =birthdate.getDate();
        //     let m1 = birthdate.getMonth() + 1;
        //     let y1 = birthdate.getFullYear(); 

        //     let today = new Date(); 

        //     let d2 = today.getDate();
        //     let m2 = today.getMonth() + 1;
        //     let y2 = today.getFullYear();

        //     let d3, m3, y3;

        //     y3 = y2 - y1;

        //     if(m2 >= m1){
        //         m3 = m2 - m1;
        //     } else {
        //         y3--;
        //         m3 = 12 + m2 - m1;
        //     }   
        //     if(d2 >= d1){
        //         d3 = d2 - d1;
        //     } else {
        //         m3--;
        //         d3 = getDaysInMonth(y1, m1) + d2 - d1;
        //     }
        //         if(m3 < 0){
        //             m3 = 11;
        //             y3--;
        //         }
                
            
        //     // console.log(y3, m3, d3);   /**showing age differece**/
        //     secResult.innerHTML = `Your current age is <span>${y3} </span> years <span>${m3} </span> months and <span>${d3} </span> days`;
        //     // secResult.innerHTML = `You have lived for <span>${y3 * 12 + m3} </span> months and <span>${(y3 * 12 + m3) * 30 + d3} </span> days`;
        // }
        function getDaysInMonth(year, month){
            return new Date (year, month, 0).getDate();
        }
