---
title: ApplicationRequest.local - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="index.html">ApplicationRequest</a> / <a href="./local.html">local</a></div>

# local

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">local</span><span class="symbol">: </span><a href="../../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a></code></div>

Contains http request and connection details such as a host name used to connect, port, scheme and so on.
No proxy headers could affect it. Use <a href="#">ApplicationRequest.origin</a> if you need override headers support

