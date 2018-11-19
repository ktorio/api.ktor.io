---
title: AuthScheme.Basic - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">AuthScheme</a> / <a href="./-basic.html">Basic</a></div>

# Basic

<div class="signature"><code><span class="keyword">val </span><span class="identifier">Basic</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Basic Authentication described in the RFC-7617

<pre markdown="1">response = base64("$user:$password")
</pre>

see https://tools.ietf.org/html/rfc7617)

