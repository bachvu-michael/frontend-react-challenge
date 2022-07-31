# Welcome to Michael's homework

## Getting Started (start local)

To run this site locally, you need to prepare node v16.16.0 or higher version
```bash
node v16.16.0
```
Go to project folder and open terminal
```bash
npm install
# 
npm run build
#
npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[http://localhost:3000/advertisers](http://localhost:3000/advertisers)

[http://localhost:3000/advertisers/10001](http://localhost:3000/advertisers/10001)

## Live check
I already deploy project to server, so if you don't want to start local, you can check the site at [https://frontend-react-challenge-sable.vercel.app/](https://frontend-react-challenge-sable.vercel.app/)
## Introduce about the structure of code
```bash
├── components (component folder)
├── interfaces (type and enum)
├── mockup-data (json data)
├── pages
│   ├── api (fake API)
│   ├── advertisers
│   │   ├── [slug].tsx (advertiser page detail)
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── advertisers.tsx (advertisers page list)
│   ├── index.tsx (page home)
├── public (assets public folder)
├── services (provide service and utility function)
├── static (assets folder)
└── styles (style folder)
```
## Introduce about feature in homework
- I had build search and sort by name in [/advertisers](https://frontend-react-challenge-sable.vercel.app/advertisers) page.
- I add pagination to the list Affiliate Programs (but I think the better way is work with BE to pagination).
- I develop the detail advertiser page and list of referent advertiser.
- I design to 2 layout, one for list page and another for detail page, component the HTML code, dynamic parameter.

## Tech use in the project
- React: [next js](https://nextjs.org/) 
- Mockup API [link](https://nextjs.org/docs/api-routes/introduction)
- Typescript
- Deploy by [vercel](https://vercel.com/)
## Link project

[https://github.com/bachvu-michael/frontend-react-challenge](https://github.com/bachvu-michael/frontend-react-challenge)

## ***
Thank you for spend your time to this homework, I look forward to receiving feedback from you and hope we can have more conversation.