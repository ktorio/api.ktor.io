---
title: CallId.Configuration.reply - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallId</a> / <a href="index.html">Configuration</a> / <a href="./reply.html">reply</a></div>

# reply

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">reply</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallId.Configuration$reply(kotlin.Function2((io.ktor.application.ApplicationCall, kotlin.String, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">call</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">,</span>&nbsp;<span class="parameterName">callId</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Replies with retrieved or generated <a href="../../call-id.html">callId</a>. Usually <a href="reply-to-header.html">replyToHeader</a> could be used instead.

