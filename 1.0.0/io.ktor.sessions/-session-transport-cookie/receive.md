---
title: SessionTransportCookie.receive - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTransportCookie</a> / <a href="./receive.html">receive</a></div>

# receive

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">receive</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$receive(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../-session-transport/receive.html">SessionTransport.receive</a>

Gets session information from a <a href="receive.html#io.ktor.sessions.SessionTransportCookie$receive(io.ktor.application.ApplicationCall)/call">call</a> and returns a String if success or null if failed.

