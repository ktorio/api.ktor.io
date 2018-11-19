---
title: origin - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./origin.html">origin</a></div>

# origin

<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">origin</span><span class="symbol">: </span><a href="../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a></code></div>

Represents request and connection parameters possibly overridden via https headers.
By default it fallbacks to <a href="../io.ktor.request/-application-request/local.html">ApplicationRequest.local</a>

