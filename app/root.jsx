import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from '~/styles/global.css'

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => ([
  {
  rel: 'stylesheet',
  href: globalStyles
},
  {
  rel: 'stylesheet',
  href: 'https://cdn.simplecss.org/simple.min.css'
}

])

function Layout () {
  return (
    <>
    <header>
      <Link to='/'>
      <h1>RedStabros Remix Blog</h1>
      </Link>

    </header>    
    <Outlet />
    <footer>
    <small>© Copyright 2022 - RedStabros.</small>
    </footer>
    </>
  )
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <title>Blog REMIX APP</title>
        <Meta />
        <Links />        
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
