---
title: CallId.Configuration.generate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallId</a> / <a href="index.html">Configuration</a> / <a href="./generate.html">generate</a></div>

# generate

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">generate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$generate(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-provider.html"><span class="identifier">CallIdProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<a href="generate.html#io.ktor.features.CallId.Configuration$generate(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</a> function will be applied when there is no call id retrieved. It should generate a string to be used
as call id or <code>null</code> if it is impossible to generate call id for some reason.
Note that it should conform to call id verification otherwise it may be discarded or may lead to
complete call rejection

**See Also**

<a href="../../-call-id-verifier.html">CallIdVerifier</a>

<a href="verify.html">verify</a>

