---
title: nextNonce - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util</a> / <a href="./next-nonce.html">nextNonce</a></div>

# nextNonce

<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">nextNonce</span></s><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

**Deprecated:** Use generateNonce() instead

Generates a nonce string 16 characters long. Could block if the system's entropy source is empty

