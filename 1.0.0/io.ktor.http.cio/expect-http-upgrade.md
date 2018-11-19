---
title: expectHttpUpgrade - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./expect-http-upgrade.html">expectHttpUpgrade</a></div>

# expectHttpUpgrade

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">expectHttpUpgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/upgrade">upgrade</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/connectionOptions">connectionOptions</span><span class="symbol">:</span>&nbsp;<a href="-connection-options/index.html"><span class="identifier">ConnectionOptions</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

**Return**
<code>true</code> if an http upgrade is expected accoding to request <a href="expect-http-upgrade.html#io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/method">method</a>, <a href="expect-http-upgrade.html#io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/upgrade">upgrade</a> header value and
parsed <a href="expect-http-upgrade.html#io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.HttpMethod, kotlin.CharSequence, io.ktor.http.cio.ConnectionOptions)/connectionOptions">connectionOptions</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">expectHttpUpgrade</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.cio.Request)/request">request</span><span class="symbol">:</span>&nbsp;<a href="-request/index.html"><span class="identifier">Request</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

**Return**
<code>true</code> if an http upgrade is expected according to <a href="expect-http-upgrade.html#io.ktor.http.cio$expectHttpUpgrade(io.ktor.http.cio.Request)/request">request</a>

</div>
