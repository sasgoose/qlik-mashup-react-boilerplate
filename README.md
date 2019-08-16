# Qlik Mashup React Boilerplate

## Josh Asi

### Initial Set-Up

`git clone https://github.com/josh-asi/qlik-mashup-react-boilerplate.git`

then

`npm i`

### Initial Steps

1. Go to **dev hub** (_{qlik-server}_/dev-hub)
2. Go to the **mashup editor** (on the left hand side)
3. Create a new project with your desired name
4. Choose any mashup template
5. Add these new files
   - main.js
   - runtime.js
   - vendors.js
   - main.css
6. Copy the contents of the .qext file on devhub to _Mashup.qext_
7. On your local directory, rename _Mashup.qext_ to be the same as your mashup name
8. In the **config.js** file under webpack, replace the _{server_name}_ and _{mashup_name}_ with your server name and mashup name
9. In **webpack.common.js**, change the following:
   - HtmlWebpackPlugin -> filename -> "./{mashup_name}.html"
   - CopyPlugin -> Change only the "_Mashup.qext_" in **from** and **to**, to be "{mashup_name}.qext"
10. Run `npm start` and view your mashup on {server_name}/extensions/{mashup_name}/{mashup_name.html}

### Build (production)

If you have a production server, simply run `npm run build` and it will create an optimised React production build. Make sure you have changed the path in **config.js**.

### Debug

### Known Limitations

- Calling the Qlik APIs using the Qlik object does not work properly on IE11
- You have to manually refresh the page every time you make a change to see your changes

### Contact

If you've got any questions, please contact me at [josh.asi@waitematadhb.govt.nz.](mailto:josh.asi@waitematadhb.govt.nz?subject=Qlik%20React%20Mashup)
