---
title: cookiesSession - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.server.testing</a> / <a href="./cookies-session.html">cookiesSession</a></div>

# cookiesSession

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">cookiesSession</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$cookiesSession(io.ktor.server.testing.TestApplicationEngine, kotlin.Function0((kotlin.Unit)))/callback">callback</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Keep cookies between requests inside the <a href="cookies-session.html#io.ktor.server.testing$cookiesSession(io.ktor.server.testing.TestApplicationEngine, kotlin.Function0((kotlin.Unit)))/callback">callback</a>.

This processes <a href="../io.ktor.http/-http-headers/-set-cookie.html">HttpHeaders.SetCookie</a> from the responses and produce <a href="../io.ktor.http/-http-headers/-cookie.html">HttpHeaders.Cookie</a> in subsequent requests.

