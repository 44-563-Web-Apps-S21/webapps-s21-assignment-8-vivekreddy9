const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table border = "2"> <tr> <th>Location</th> <th>Spending Hours</th> <th>Expenditure</th> </tr> <tr> <td>Chennai</td> <td>48</td> <td>$200</td> </tr> <tr> <td>Hyderabad</td> <td>72</td> <td>$150</td> </tr> <tr> <td>Mumbai</td> <td>24</td> <td>$300</td> </tr> <tr> <td>Banglore</td> <td>24</td> <td>$250</td> </tr> </table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})