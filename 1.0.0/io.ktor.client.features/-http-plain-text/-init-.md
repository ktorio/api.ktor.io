---
title: HttpPlainText.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="index.html">HttpPlainText</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">HttpPlainText</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.HttpPlainText$<init>(java.nio.charset.Charset)/defaultCharset">defaultCharset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that encodes <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> request bodies to <a href="../../io.ktor.http.content/-text-content/index.html">TextContent</a>
using a specific charset defined at <a href="default-charset.html">HttpPlainText.defaultCharset</a>.
And also processes the response body as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.

NOTE: the <a href="default-charset.html">HttpPlainText.defaultCharset</a> is the default one for your JVM so can change between servers!
    So please, specify one if you want consistent results in all your deployments.

