---
title: suitableCharset - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./suitable-charset.html">suitableCharset</a></div>

# suitableCharset

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">suitableCharset</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$suitableCharset(io.ktor.application.ApplicationCall, java.nio.charset.Charset)/defaultCharset">defaultCharset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a></code></div>

Detect suitable charset for an application call by <code>Accept</code> header or fallback to <a href="suitable-charset.html#io.ktor.features$suitableCharset(io.ktor.application.ApplicationCall, java.nio.charset.Charset)/defaultCharset">defaultCharset</a>

