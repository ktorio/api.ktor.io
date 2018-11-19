---
title: AuthScheme.Digest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">AuthScheme</a> / <a href="./-digest.html">Digest</a></div>

# Digest

<div class="signature"><code><span class="keyword">val </span><span class="identifier">Digest</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Digest Authentication described in the RFC-2069:

<pre markdown="1">HA1 = MD5("$username:$realm:$password") // What's usually stored
HA2 = MD5("$method:$digestURI")
response = MD5("$HA1:$nonce:$HA2") // The client and the server sends and checks this.
</pre>

see https://tools.ietf.org/html/rfc2069

