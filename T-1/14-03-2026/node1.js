var obj={
            "A":"LJU",
            "B":["CSE","IT","Cyber Security","CE"],
            "C":[{
                "D":"HI",
                "E":["are",4,{"f":["semester","we"]}],
            }],
            "G":{
                "H":"students",
                "I":["of","!"]
            },
            "J":[{"k":"Python","L":"Brach"},"FSD-2"]
        }
        console.log(obj.C[0].D+" "+obj.G.I[1]+" "+obj.C[0].E[2].f[1]);
        console.log(obj.C[0].E[0]);
        console.log(obj.G.H);
        console.log(obj.G.I[0]);
        console.log(obj.C[0].E[2].f[0]);
        console.log(obj.C[0].E[1]);
        console.log("and")
        console.log(obj.B[0]);
        console.log(obj.J[0])



//Hi! we are students of semester 4 and CSE branch