---
title: readText - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.response</a> / <a href="./read-text.html">readText</a></div>

# readText

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read the <a href="-http-response/content.html">HttpResponse.content</a> as a String. You can pass an optional <a href="read-text.html#io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</a>
to specify a charset in the case no one is specified as part of the Content-Type response.
If no charset specified either as parameter or as part of the response,
<a href="-http-response-config/default-charset.html">HttpResponseConfig.defaultCharset</a> will be used.

Note that <a href="read-text.html#io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</a> parameter will be ignored if the response already has a charset.
    So it just acts as a fallback, honoring the server preference.

