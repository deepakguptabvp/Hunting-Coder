import * as fs from "fs";
import { NextResponse } from "next/server";
import { cwd } from "process";

export async function GET(req, res) {
    try {
        const param = new URL(req.url)?.searchParams?.get("param");
        console.log(param);
        let responseData;
        let path  = process.cwd() + "/src/app/api/blogList/blogsdata";
        let fileContents = [];
        if (param) {
            try {
                responseData = await fs.promises.readFile(`${path}/${param}.json`, "utf-8");
                console.log("jhgfdfghjk", responseData)
                responseData = JSON.parse(responseData);
            } catch (error) {
                return NextResponse.json(
                    { message: "blog not found" },
                    { status: 404 }
                );
            }

        } else {
            console.log("hellooooooooooo3333", cwd(), process.cwd() + "/src/app/api/blogList");
            
            let files = await fs.promises.readdir(path);
            // const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
            console.log("hellooooooooooo44444", files);
            // console.log(files)

            for (const file of files) {
                const filePath = `${path}/${file}`;
                const data = await fs.promises.readFile(filePath, 'utf-8');
                fileContents.push(JSON.parse(data)); // Assuming JSON format, adjust if needed
            }
        }

        return NextResponse.json(
            { message: "Message Get data", data: param ? responseData : fileContents },
            { status: 200 }
        );


    } catch (error) {
        return NextResponse.json(
            { message: "Server error" +  "hellooooo" },
            { status: 500 }
        );
    }
}



// export async function GET(req, res) {
//     try {

        


        

//         return NextResponse.json(
//             { message: "Message Get data" },
//             { status: 200 }
//         );


//     } catch (error) {
//         return NextResponse.json(
//             { message: "Server error" +  "hellooooo" },
//             { status: 500 }
//         );
//     }
// }
