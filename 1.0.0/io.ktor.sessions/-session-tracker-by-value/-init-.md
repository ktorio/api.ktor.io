---
title: SessionTrackerByValue.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTrackerByValue</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionTrackerByValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTrackerByValue$<init>(kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionSerializer)/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTrackerByValue$<init>(kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionSerializer)/serializer">serializer</span><span class="symbol">:</span>&nbsp;<a href="../-session-serializer/index.html"><span class="identifier">SessionSerializer</span></a><span class="symbol">)</span></code></div>

<a href="../-session-tracker/index.html">SessionTracker</a> that stores the contents of the session as part of HTTP Cookies/Headers.
It uses a specific <a href="-init-.html#io.ktor.sessions.SessionTrackerByValue$<init>(kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionSerializer)/serializer">serializer</a> to serialize and deserialize objects of type <a href="-init-.html#io.ktor.sessions.SessionTrackerByValue$<init>(kotlin.reflect.KClass((kotlin.Any)), io.ktor.sessions.SessionSerializer)/type">type</a>.

