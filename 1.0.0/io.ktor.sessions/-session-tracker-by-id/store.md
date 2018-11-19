---
title: SessionTrackerById.store - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTrackerById</a> / <a href="./store.html">store</a></div>

# store

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">store</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTrackerById$store(io.ktor.application.ApplicationCall, kotlin.Any)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.SessionTrackerById$store(io.ktor.application.ApplicationCall, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Overrides <a href="../-session-tracker/store.html">SessionTracker.store</a>

Store session <a href="store.html#io.ktor.sessions.SessionTrackerById$store(io.ktor.application.ApplicationCall, kotlin.Any)/value">value</a> and return respective transport string for the specified <a href="store.html#io.ktor.sessions.SessionTrackerById$store(io.ktor.application.ApplicationCall, kotlin.Any)/call">call</a>.

Override if there is existing session.

