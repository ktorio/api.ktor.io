---
title: SessionAuthenticationProvider.Configuration.validate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">SessionAuthenticationProvider</a> / <a href="index.html">Configuration</a> / <a href="./validate.html">validate</a></div>

# validate

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.SessionAuthenticationProvider.Configuration$validate(kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.SessionAuthenticationProvider.Configuration.T, io.ktor.auth.Principal)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a validation function that will check given <a href="index.html#T">T</a> session instance and return <a href="../../-principal.html">Principal</a>,
or null if the session does not correspond to an authenticated principal

