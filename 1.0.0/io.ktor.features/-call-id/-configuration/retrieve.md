---
title: CallId.Configuration.retrieve - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallId</a> / <a href="index.html">Configuration</a> / <a href="./retrieve.html">retrieve</a></div>

# retrieve

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">retrieve</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$retrieve(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-provider.html"><span class="identifier">CallIdProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<a href="retrieve.html#io.ktor.features.CallId.Configuration$retrieve(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</a> will be used to retrieve call id from a call. It should return <code>null</code> if no call id found in request

