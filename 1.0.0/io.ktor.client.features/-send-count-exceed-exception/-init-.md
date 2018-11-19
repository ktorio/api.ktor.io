---
title: SendCountExceedException.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="index.html">SendCountExceedException</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SendCountExceedException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.SendCountExceedException$<init>(kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Thrown when too many actual requests were sent during a client call.
It could be caused by infinite or too long redirect sequence.
Maximum number of requests is limited by <a href="../-http-send/max-send-count.html">HttpSend.maxSendCount</a>

